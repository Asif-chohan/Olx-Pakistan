import React, { Component } from 'react';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import axios from 'axios';
import '../dashboard.css'
import '../../../component/searchBar/showSearchContent/showSearchContent.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Divider from '@material-ui/core/Divider';
const baseURL = window.location.hostname === "localhost" ?
"http://localhost:5051" : '';

const styles = theme => ({
  root: {
    width: '100%',

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
    marginLeft: "620px"
  }
});

const config = {
  viewedImageSize: 0.8,
  backgroundOpacity: 0.6
};

class DashboardTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetcheData: [],
      value: '',
      adid : ''
    }
    this.handledelete = this.handledelete.bind(this)
  }


  onChange(i, value, tab, ev) {
    console.log(arguments);
  }

  onActive() {
    let data = localStorage.getItem("favAdiD")
    data.map((id)=>{
      
    })
  
    axios.post(baseURL + '/showFavAds', ).then((res) => {

      this.setState({
        fetcheData: res.data.FavAdModal
      })
      console.log("from frontend" + res.data);

    }).catch((err) => {
      console.log(err);
    })
  }




  


  componentWillMount() {
    var data = {
      userid: this.props.userid
    }
    console.log(data);
    axios.post(baseURL + '/showUserAds', data).then((res) => {

      this.setState({
        fetcheData: res.data.AdModel
      })
      console.log("from frontend" + res.data);

    }).catch((err) => {
      console.log(err);
    })
  }




  handledelete = (event, value) => {


    
    this.setState({ value });
    var data = {
      adid :this.refs.adid.value
    }

    axios.post('/delete', data).then((res) =>{
      alert("Successfully Deleted")
    }
    ).catch((err) => {
      console.log(err);
      
    }
    )

    
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Tabs onChange={this.onChange} defaultSelectedIndex={0} className={classes.root}>
        <Tab value="pane-1" label="Your Ads">
          <div className={classes.root}>

            {this.state.fetcheData.length > 0 ?
              this.state.fetcheData.map((ad, i) => {
                return (
                  <div key={i} className="expnansionPanel">
                    <ExpansionPanel className={classes.root} >
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="imageDiv" >
                          <img src={baseURL + "/static/media/" + ad.image } alt="No Image" />
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
                          <Divider />
                          <input type="hidden" ref="adid" value={ad._id} />
                          <Typography className="priceCustom">
                      
                          <BottomNavigation value={value} onChange={this.handledelete} className={classes.btmFav}>
                          <BottomNavigationAction name={ad._id} label="Delete This Ad" value="Delete" icon={<DeleteIcon />} />
                        </BottomNavigation>
                          </Typography >
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>

                )
              })
              : "There is no Ad yet"}




          </div>




        </Tab>
        <Tab value="pane-2" label="Favorite Ads" onActive={this.onActive}>
        <div className={classes.root}>

            {this.state.fetcheData.length > 0 ?
              this.state.fetcheData.map((ad, i) => {
                return (
                  <div key={i} className="expnansionPanelCustom">
                    <ExpansionPanel >
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="imageDiv" >
                          <img src={ad.image} alt="No Image" />
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
                          <Divider />
                          <input type="hidden" ref="adid" value={ad._id} />
                          <Typography className="priceCustom">
                      
                          <BottomNavigation value={value} onChange={this.handledelete} className={classes.btmFav}>
                          <BottomNavigationAction name={ad._id} label="Delete This Ad" value="Delete" icon={<DeleteIcon />} />
                        </BottomNavigation>
                          </Typography >
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>

                )
              })
              : "There is no Ad yet"}




          </div>
        </Tab>
      </Tabs>
    );
  }
}

DashboardTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardTabs);
