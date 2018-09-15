const express = require("express");
const FavAdModal = require("../modals/adsModal")
var router = express.Router();



router.post('/favoriteAd', function (req, res) {
    
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


module.exports =  router
