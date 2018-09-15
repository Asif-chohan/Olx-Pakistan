import React from 'react';
import Modal from 'react-responsive-modal';
import Container from 'muicss/lib/react/container';
import './category.css';
import Button from 'muicss/lib/react/button';
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
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';



export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      category: ""

    }
    this.handleCategory = this.handleCategory.bind(this)
  }


  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {

    this.setState({ open: false });

  };

  handleCategory = (e) => {
    console.log(e.target.name);
    this.setState({
      category: e.target.name
    }, () =>
        this.props.onSelectCategory(this.state.category),

    )
  }

  
  render() {
    const { open } = this.state;
    return (
      <Container>
        <div class="mui-textfield">


          <input required readOnly defaultValue={this.state.category}
            onFocus={this.onOpenModal} className=" inputCustom" />
        </div>




        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >

          <div className="category">
            <form>
              <Row >
                <Col md="2" >
                  <Button type="button"  variant="flat" color="primary" className="imgBtn">

                    <img src={propertyForSale}  onClick={this.handleCategory} name="Property for Sale" alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Property for Sale</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                    >

                    <img name="Vehicles" onClick={this.handleCategory} src={vehicles} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Vehicles</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                    >
                    <img name="Bikes" onClick={this.handleCategory} src={bike} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Bikes</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                    >
                    <img name="Electronics & Home Appliances" onClick={this.handleCategory} src={HAppliances} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Electronics & Home Appliances</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                   >
                    <img src={mob} name="Mobiles"  onClick={this.handleCategory} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Mobiles</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                   >
                    <img src={job} name="Jobs" onClick={this.handleCategory} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Jobs</span>
                </Col>
              </Row>
              <Row>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                    >
                    <img name="Furniture" onClick={this.handleCategory}  src={furniture} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Furniture</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                    onClick={this.Tools}>
                    <img src={tools} name="Tools" onClick={this.handleCategory} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Tools</span>
                </Col>

                <Col md="2" >
                  <Button type="button"  variant="flat" color="primary" className="imgBtn"
                    onClick={this.Animals}>
                    <img src={animals} name="Animals" onClick={this.handleCategory}  alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Animals</span>
                </Col>

                <Col md="2" >
                  <Button type="button" variant="flat" color="primary" className="imgBtn"
                    onClick={this.Books}>
                    <img src={books} name="Books" onClick={this.handleCategory} alt="Failed to load Image" className="categoryImages" />
                  </Button>
                  <br />
                  <span>Books</span>
                </Col>

              </Row>
              <div class="mui-textfield showSelectedValue">
                <label className="inptLabels"  > Selected Category</label>

                <input type="text" readOnly className="inputCustom" value={this.state.category} />
                <Button color="primary" type="button" onClick={this.onCloseModal}>OK</Button>

              </div>

            </form>



          </div>

        </Modal>

      </Container>
    );
  }
}