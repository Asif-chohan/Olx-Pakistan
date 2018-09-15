import React, { Component } from 'react';
import './submitAnAD.css';
import Container from 'muicss/lib/react/container';
import Header from '../../component/header/header';
import axios from 'axios';
import Footer from '../../component/footer/Footer';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Textarea from 'muicss/lib/react/textarea';
import ImageUploader from './imageUploader/uploadImage';
import Category from './category/category';

const baseURL = window.location.hostname === "localhost" ?
"http://localhost:5051" : '';

const config = {
  headers: {
    'content-type' : 'multipart/form-data'
  }
}



export default class SubmitAnAd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      province: '',
      adDescription: 'enter description',
      image: 'select image',
      importedCatergory: "Select Category",
      user: false,
      username : "",
      userid : ""
      
    };
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleCatergory = this.handleCatergory.bind(this)
  }


  componentWillMount = () => {
    axios.post("/dashboard", { message: "Login first" })
    .then((res) => {
      
      console.log("response" + res);
      
      
      this.setState({
        user:true,
        username: res.data.name,
        userid: res.data._id
        
      })
    }).catch((err) => {
      alert("You should login first");
     
      this.props.history.push('/myAccount');
    })
  };


  handleSelectChange(event) {
    this.setState({
      province: event.target.value
    })
  }

  handleTextArea(event) {
    this.setState({
      adDescription: event.target.value
    })
  }

  handleImageUpload(image) {
    this.setState({
      image: image
    });
  }

  handleCatergory = (catergory) => {
    this.setState({
      importedCatergory: catergory
    })
  }



  render() {
    return (
      <Container fluid={true} className="loginContainer">
      {this.state.user ? 
      <div>
        <Header />
        <div className="signin">



          <div className="NewADformDiv">

            <form class="mui-form" onSubmit={(e) => {
              e.preventDefault();
              let formData = new FormData();
              formData.append('title',this.refs.adTitle.value);
              formData.append('username',this.state.username);
              formData.append('cellno',this.refs.cellNo.value);
              formData.append('provice',this.state.province);
              formData.append('adDescription', this.state.adDescription);
              formData.append('price',this.refs.price.value);
              formData.append('image',this.state.image);
              formData.append('importedCatergory',this.state.importedCatergory);
              formData.append('userid',this.state.userid);

              


              console.log(formData);

              axios.post(baseURL + '/SubmitAnAd', formData,config).then((res) => {

                this.props.history.push('/');
                alert("Your AD hasbeen successfully uploaded")

                console.log(res);

              }).catch((err) => {
                console.log(err);

              })
            }}>
              <div className="newAdInputCustom ">
                <legend className="formLagend formLagendCustom ">Submit An AD</legend>
              </div>
              <div class="mui-textfield newAdInputfields">
                <label className="inptLabels"> AD Title</label>

                <input ref="adTitle" type="text" required className="inputCustom" />


              </div>
              <div class="mui-textfield newAdInputfields">
                <label className="inptLabels">Category</label>
                <Category onSelectCategory={this.handleCatergory} />
              </div>
              <div className="newAdInputCustom ">
                <div class="mui-textfield newAdInputfields">
                  <label className="inptLabels">AD Description</label>
                  <Textarea onChange={this.handleTextArea.bind(this)} required={true} className="newAdTextAria" placeholder="Include the Brand, Model, Age and Any included Accessaries" />
                  <ImageUploader onImageUpload={this.handleImageUpload} />
                  
                  <div class="mui-textfield newAdInputfields">
                  <label className="inptLabels"> Price</label>

                  <input ref="price" type="text" required className="inputCustom" placeholder="Enter Required Price" />


                </div>
                <br />

                  <legend className="formLagend newAdContact ">Your Contact Details</legend>
                </div>
                


              </div>


              <div>
                <div class="mui-textfield newAdInputfields">
                  <label className="inptLabels"> Name</label>

                  <input type="text" value={this.state.username} required className="inputCustom" placeholder="Enter Your Name" />


                </div>
                <div class="mui-textfield newAdInputfields">
                  <label className="inptLabels"> Phone Number</label>

                  <input ref="cellNo" type="tel" required className="inputCustom"  placeholder="" title="enter the valid phone number" />


                </div>
              </div>



              <div className="newAdInputCustomProvinceSection ">
                <div class="mui-textfield newAdInputfields">
                  <label className="inptLabels">Provice</label>
                  <Select onChange={this.handleSelectChange.bind(this)} defaultValue="Select Category" placeholder="Select Your Province">

                    <Option value="Punjab" label="Punjab" />
                    <Option value="Sindh" label="Sindh" />
                    <Option value="KPK" label="KPK" />
                    <Option value="Baluchistan" label="Baluchistan" />
                  </Select>

                </div>




              </div>


              <div className="btmBox">

                <button type="submit" class="mui-btn mui-btn--raised sbmitBtn">Submit</button>
              </div>


            </form>


          </div>



          <Footer />


        </div>
        </div>
         :
        <div></div>  
       }
      </Container>
    )
  }
}
