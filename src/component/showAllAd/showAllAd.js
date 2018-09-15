import React, { Component } from 'react';
import axios from 'axios';
import '../searchBar/showSearchContent/showSearchContent.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import './showAllAd.css';

const baseURL = window.location.hostname === "localhost" ?
  "http://localhost:5051" : '';



const styles = theme => ({
  root: {
    width: '100%',
    textAlign: "left"

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "20px",

    fontWeight: "bold",
    width: "100%",
    textAlign: "left"
  },
  image: {
    width: 400,
    height: 300,
    backgroundSize: 'cover'
  },
  btmFav: {
    textAlign: "right",
    marginLeft: "825px"
  }
});

const config = {
  viewedImageSize: 0.8,
  backgroundOpacity: 0.6
};





let favAdId = [];




class ShowAllAd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetcheData: [],
      value: '',
      userId: "",
      user: false,
    }
  }

  componentWillMount() {
    axios.get(baseURL + '/showAll').then((res) => {
      console.log("before set state" + res.data);

      this.setState({
        fetcheData: res.data.AdModel
      }), () => {
        console.log(this.state.fetcheData)
      }





    }).catch((err) => {
      console.log(err);

    })


  }

  // componentDidMount = () => {
  //   axios.get(baseURL + "/dashboard")
  //     .then((res) => {
  //       console.log("response" + res);
  //       this.setState({
  //         user: true,
  //         userid: res.data._id

  //       })
  //     }).catch((err) => {
  //       console.log(err);

  //     })
  // };






  handleFavorate = (id) => {

    var data = {
      adid: id,
      userid: this.state.userid

    }


    axios.post(baseURL + '/favoriteAd', data).then((res) => {
      alert("This ad is added to Your favorite Ads")

    }).catch((err) => {
      console.log(err);

    })
    favAdId.push(id)

    localStorage.setItem("favAdiD", favAdId);

  };



  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <h2 className="heading">Featured Ads</h2>
        {this.state.fetcheData.length > 0 ?
          this.state.fetcheData.map((ad, i) => {
            return (
              <div key={i} className="expnansionPanelCustom">

                <ExpansionPanel >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div className="imageDiv" >
                      <img src={baseURL + "/static/media/" + ad.image} alt="No Image" />
                    </div>
                    <div className="typographyCustom" >
                      <Typography className={classes.heading}>{ad.title}</Typography>
                      <div>
                        <Typography className="priceCustom"><span>Rs.</span>{ad.price}</Typography>
                      </div>
                      <Typography className="TypographyTags"><span className="Description">Category:</span> {ad.importedCatergory}</Typography>

                    </div>




                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className="typographyCustom">
                      <Typography className="TypographyTags">
                        <span className="Description">Desription:</span>
                        {ad.adDescription}
                      </Typography>
                      <Typography className="TypographyTags">
                        <span className="By">By</span>
                        {ad.username}

                      </Typography >

                      <Typography className="TypographyTags">
                        <span className="From">From</span>
                        {ad.provice}
                      </Typography >

                      <Typography className="TypographyTags">
                        <span className="Contect">Contect</span>
                        {ad.cellno}
                      </Typography >
                      {/* {this.state.user ? 
                      <div>
                      <Divider />
                      <Typography className="priceCustom">
                        <BottomNavigation onChange={() => this.handleFavorate(ad._id)} className={classes.btmFav} >
                          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                        </BottomNavigation>
                      </Typography >
                      </div>
                      : <span></span>
                      } */}
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>

            )
          })
          : "There is no Ad yet"}




      </div>
    )
  }
}


ShowAllAd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowAllAd);