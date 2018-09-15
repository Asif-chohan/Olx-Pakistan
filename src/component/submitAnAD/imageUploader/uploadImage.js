import React, { Component } from 'react'
import './uploadImage.css';

export default class ImageUpload extends Component {


  constructor(props) {
    super(props)
    this.state = {
      file: null,
      activeClass: "imgHide"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
   
   
    if (event.target.files[0]) {
      this.props.onImageUpload(event.target.files[0]),

        this.setState({
          file: URL.createObjectURL(event.target.files[0]),
          activeClass: "imgPreview"
        }
        
        )
     
        
    } else {
      this.setState({
        file: null
      })
      
    }

  }
  render() {
    return (
      <div>

        <input type="file" onChange={this.handleChange} className="submitButton" />
        <br />
        <img src={this.state.file} className={this.state.activeClass}  />
       

      </div>
    );
  }


}

