import React, { Component } from 'react'
import './searchBar.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const baseURL = window.location.hostname === "localhost" ?
  "http://localhost:5051" : '';





const suggestions = [
  { label: 'Punjab' },
  { label: 'Sindh' },
  { label: 'KPK' },
  { label: 'Baluchistan' }


].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));



const suggestionsCategory = [
  { label: 'Property for Sale' },
  { label: 'Vehicles' },
  { label: 'Bikes' },
  { label: 'Electronics & Home Appliances' },
  { label: 'Mobiles' },
  { label: 'Jobs' },
  { label: 'Furniture' },
  { label: 'Animals' },
  { label: 'Books' },
  { label: 'Tools' },

].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));
const styles = theme => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column wrap',


  },
  input: {
    display: 'flex',
    padding: 0,


  },
  valueContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    fontSize: 16,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },




  // second input styles



  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },

  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(200% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}



const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,

};








class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchAd = this.searchAd.bind(this);
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)

  }

  state = {
    provice: null,
    importedCatergory: null

  };
  handleChange1 = name => value => {
    this.setState({
      provice: value.value,
    });




  };


  handleChange2 = name => value => {
    this.setState({
      importedCatergory: value.value,
    });




  };


  searchAd() {
    var provice = this.state.provice;
    var importedCatergory = this.state.importedCatergory
    var obj ={
      provice,
      importedCatergory
    }
    // console.log(data);
    localStorage.setItem("provice", provice);
    localStorage.setItem("importedCatergory", importedCatergory)
    this.props.history.push('/SearchContents');
    // axios.post(baseURL + '/SearchAd', data).then((res) => {

    //   this.props.history.push('/SearchContents');

    //   console.log(res);

    // }).catch((err) => {
    //   console.log(err);

    // })
  }












  render() {
    const { classes } = this.props;

    return (

      <Grid container spacing={24} className='SrchBarContainer'>
        <Grid item sm={4}>
          <div className={classes.root}>
            <NoSsr>
              <Select
                classes={classes}
                options={suggestions}
                components={components}
                value={this.state.province}
                onChange={this.handleChange1('province')}
                placeholder="Search Your Provice"
                className="citySelect"
              />

            </NoSsr>
          </div>
        </Grid>
        <Grid id="" item sm={6}>
          <div className={classes.root}>
            <NoSsr>
              <Select
                classes={classes}
                options={suggestionsCategory}
                components={components}
                value={this.state.Category}
                onChange={this.handleChange2("Category")}
                placeholder="Search a Category"
                className="citySelect"
              />

            </NoSsr>
          </div>
        </Grid>
        <Grid item sm={2}>
          <Button variant="contained" onClick={this.searchAd.bind(this)} color="primary" className={classes.button}>
            Search
      </Button>
        </Grid>
      </Grid>


    )
  }
}


SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SearchBar));