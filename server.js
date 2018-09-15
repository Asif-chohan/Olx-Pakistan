var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var flash=require("connect-flash");
var multer  = require('multer');





app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());







// required for passport
app.use(session({ secret: 'secretForPassportSession' })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions
app.use(flash());


mongoose.connect('mongodb://localhost/olx')
    .then(() => console.log('connected to mongoose'))
    .catch((err) => console.error(err));


var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
var UserModel = mongoose.model('user', userSchema);


passport.use(new LocalStrategy({ usernameField: 'email',  passReqToCallback : true },
    function (req, email, password, done) {

        UserModel.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false,{message:'Invalid username or password'});
            }
            if (user.password != password) {
                return done(null, false, );
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {

    UserModel.findById(id, function (err, user) {
        done(err, user);
    });
});


app.post('/signup', function (req, res) {
    var newuser = new UserModel(req.body)
    newuser.save(function (err, user) {
        if (user) {
            res.status(200);
            res.end("done");

        }
        else {
            res.status(500);
            res.end("error");
        }
    })
}
)





app.post('/login', passport.authenticate('local',{ failureFlash: false } ), (req, res) => {

    if (req.isAuthenticated()) {
        res.end("user is logedin");
    }
    else {
        res.end("user is not logedin")
    }
})


app.post('/logout', (req, res) => {

    req.logout()
    res.status(200);
    res.end("successfully logout");

})
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(200)
    }
    else {
        res.status(500);
        res.end("user is not authenticated");
    }
})






// this section is for new Ads


var Schema = mongoose.Schema;
var newAdSchema = mongoose.Schema({
    title: String,
    importedCatergory: String,
    adDescription: String,
    image:String,
    name:String,
    cellno:String,
    provice:String,
    price:String,
    username:String,
    userid:String,
    createAt: {type:Date, default: Date.now()}
});



var AdModel = mongoose.model('Ads', newAdSchema);





const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './build/static/media/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
      }
  });
 
  const upload = multer({ storage });
          

app.post('/SubmitAnAd', upload.single("image"), function (req, res) {

    


    var newAd = new AdModel()
    newAd.title = req.body.title
    newAd.name=  req.body.name
    newAd.cellno = req.body.cellno
    newAd.provice = req.body.provice
    newAd.adDescription = req.body.adDescription
    newAd.price = req.body.price
    newAd.importedCatergory = req.body.importedCatergory
    newAd.username = req.body.username
    newAd.userid = req.body.userid
    newAd.image = req.file.filename
  





    newAd.save(function (err, Ads) {
        if (Ads) {
            res.status(200);
            res.end("done");

        }
        else {
            res.status(500);
            res.end("error");
        }
    })
}
)








// end of section


//this section is for show all ads

app.get("/showAll", (req, res) => {
    const query = AdModel.find().sort({"createAt": -1})
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        } 
       
        res.status(200).send({ AdModel: data });
        console.log(data);
        
    }
});



//end of section show all ads


//this section is for search ads

app.post("/SearchAd", (req, res) => {
    const query = AdModel.find({
        importedCatergory:req.body.importedCatergory,
        provice:req.body.provice
    }).sort({"createAt": -1})
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        } 
        res.status(200).send({ AdModel: data });
        console.log(data);
        
    }
});


// end of section





//this section is for Ads by category
app.post("/showAdbyCategory", (req, res) => {
    const query = AdModel.find({
        importedCatergory:req.body.category,
    }).sort({"createAt": -1})
    console.log(req.body.category)
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        } 
        res.status(200).send({ AdModel: data });
        console.log(data);
        
    }
});







// end of section ads by category







app.post("/showUserAds", (req, res) => {
    const query = AdModel.find({
        userid:req.body.userid,
    }).sort({"createAt": -1})
    console.log(req.body.category)
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        } 
        res.status(200).send({ AdModel: data });
        console.log(data);
        
    }
});















//end fav ad




//delete api

app.post("/delete", (req, res) => {
    const query = AdModel.deleteOne({
        id:req.body.adid,
     
    })
    query.exec(callback);
    function callback(error) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        } 
       
    }
});



//end delete api

//fav ads

var FavADSchema = mongoose.Schema({
    userid:String,
    adid : String,
  createAt: {type:Date, default: Date.now()}
});



var FavAdModal = mongoose.model('FavAds', FavADSchema);



app.post('/favoriteAd', function (req, res) {
    
    var newAd = new FavAdModal(req.body)
    newAd.save(function (err, Ad) {
        if (Ad) {
            console.log(Ad)
            res.status(200);
            res.end("done");

        }
        else {
            res.status(500);
            res.end("error");
        }
    })
}
)




app.post("/showFavAds", (req, res) => {
var idArray = req.body.json_data

console.log(idArray);
    const query = FavAdModal.find(
        { _id: {$in : idArray}}
    )
   
    query.exec(callback);
    function callback(error, data) {
        if (error) {
            console.log("error", error);
            res.status(500).send({ error: error });
            return;
        } 
        res.status(200).send({ FavAdModal: data });
        console.log(data);
        
    }
});








// end fav api

app.use(express.static('./build'));

app.listen('5051', function () {
    console.log("App is running on Port 5051");


});