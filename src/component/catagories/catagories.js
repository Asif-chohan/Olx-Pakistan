import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propertyForSale from './icons/propertyJPG.JPG';
import bike from './icons/bike.JPG';
import vehicles from './icons/car.JPG';
import HAppliances from './icons/homeapp.JPG';
import mob from './icons/mob.JPG';
import job from './icons/jobs.JPG';
import tools from './icons/tools.JPG';
import animals from './icons/animals.JPG';
import books from './icons/books.JPG';
import furniture from './icons/furniture.JPG';
import './categories.css'
import { connect } from 'react-redux';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

function mapDispatch(dispatch){
    return{
      
        categorySentToStore:function(value){ 
        return dispatch({type: 'SelectedCategory', value:value})}
        
    }
  };



class Categories extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedCategory:"select Category"
        }
        this.handleCategory= this.handleCategory.bind(this)
        
    }
    handleCategory =(name) =>{
        this.setState({
            selectedCategory:name

        },
         this.props.categorySentToStore(name)
    
        )
    }
 


    render() {
        return (

            <Container className="headerCustom" >
               
                    <Row>
                    <div className="categoriesCustom">
                        <Col md="1" > 
                        <Link name="Property for Sale" to="/showAdByCategory"  onClick={()=>this.handleCategory("Property for Sale")}>
                            <img src={propertyForSale} alt='Missing Image' className="categoryLink" />
                            <br />
                            <span className="categoryDiscription">Property for Sale</span>
                            </Link>
                        </Col>

                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Vehicles")}>
                            <img src={vehicles} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">vehicles</span>
                            </Link></Col>
                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Bikes")}>
                            <img src={bike} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Bikes</span>
                            </Link>
                        </Col>
                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Electronics & Home Appliances")}>
                            <img src={HAppliances} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Electronics & Home Appliances</span>
                            </Link>
                        </Col>

                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Mobiles")}>
                            <img src={mob} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Mobiles</span>
                            </Link>
                        </Col>
                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Jobs")}>
                            <img src={job} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Jobs</span>
                            </Link>
                        </Col>
                        </div>

                    </Row>

                    <Row>
                    <div className="categoriesCustom" >
                        <Col md="1" className="linkBox" > 
                        <Link  to="/showAdByCategory" onClick={()=>this.handleCategory("Furniture")}>
                            <img src={furniture} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Furniture</span>
                            </Link>
                        </Col>

                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Tools")}>
                            <img src={tools} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Tools</span>
                            </Link></Col>
                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Animals")}>
                            <img src={animals} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Animals</span>
                            </Link>
                        </Col>
                        <Col md="1">
                            <Link to="/showAdByCategory" onClick={()=>this.handleCategory("Books")}>
                            <img src={books} className="categoryLink" alt='Missing Image' />
                            <br />
                            <span className="categoryDiscription">Books</span>
                            </Link>
                        </Col>

                      
                        </div>
                    </Row>
                
            </Container>



        )
    }
}

export default connect(null, mapDispatch)(Categories);

