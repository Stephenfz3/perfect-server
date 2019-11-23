import React, { Component } from 'react';
import API from "../../utils/API";
import Carousel from "../../Components/Carousel"
import { Col, Row, Container } from "../../Components/Grid"
import ShoppingCart from "../../Components/Carlos"
import List from "../../Components/Carlos/list"
import Cart from "../../Components/Carlos/cart"
import "../MainPage/MainPage.css"

import { MDBBtn, MDBCardBody, MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCollapseHeader, MDBCard, MDBIcon } from "mdbreact";

class Detail extends Component {

  state = {
    current: 1,
    selectedSteps: [1, 3],
    result: [],
    skipped: [],
    currentSlide: 0,
    itemId: 0,
    cart: [],
    fullmenu: false,
    collapseID: ""

  }
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  nextStep = () => {
    let { current } = this.state;
    let { skipped } = this.state;
    let { selectedSteps } = this.state;
    this.setState({ result: [], currentStep: this.state.currentStep + 1 })

    if (current >= 4 && skipped.length > 0) {
      this.setState({ current: skipped[0], skipped: skipped.filter(item => { return item !== item[0] }) }, () => {
        this.switchIt(skipped[0])
      })
      console.log("current > 4 && skipped.length > 0")
    } else if (current > 4 && skipped.length < 1) {
      console.log("All steps selected")
      return;

    } else if (selectedSteps.includes(current + 1)) {
      this.setState({ current: current + 2, skipped: [...this.state.skipped, current] }, () => {
        this.switchIt(current + 2);
        console.log(selectedSteps.includes(current))
      })

    } else {

      this.setState({ current: current + 1, skipped: [...this.state.skipped, current] }, () => {
        this.switchIt(current + 1);
        console.log(selectedSteps.includes(current))
      })
    }
  }

  switchIt = (step) => {
    switch (step) {
      case 1:
        try {
          this.state.apetizers.forEach(main => {
            this.outside(main)
          })
        } catch (err) {
          console.log(err)
        }
        break;

      case 2:
        try {
          this.state.mainCourses.forEach(main => {
            this.outside(main)
          })
        } catch (err) {
          console.log(err)
        }
        break;

      case 3:
        try {
          this.state.desserts.forEach(main => {
            this.outside(main)
          })
        } catch (err) {
          console.log(err)
        }
        break;

      case 4:
        try {
          this.state.drinks.forEach(main => {
            this.outside(main)
          })
        } catch (err) {
          console.log(err)
        }
        break;

      default:
        console.log("switch case default")
        break;
    }

  }
  select = () => {

  }
  async componentDidMount() {
    let newState = this.props.location.state;
    let { current } = this.state;
    this.setState({ ...newState }, () => {
      this.switchIt(current)
    })
  }

  outside = (id) => {
    API.getDetails(id)
      .then(res => {
        this.setState({ result: [...this.state.result, res.data] })
      })
      .catch(err => console.log(err))
    console.log(this.state.result)
  }


  prevStep = () => {
    this.setState({ result: [] })
    const { current } = this.state;
    const { selectedSteps } = this.state;
    const reducedSteps = selectedSteps.filter(item => { return item !== current - 1 })
    if (current !== 1) {
      this.setState({ current: current - 1, selectedSteps: reducedSteps }, () => {
        this.switchIt(current - 1)
      })
    } else {
      this.setState({ current: 4 }, () => {
        this.switchIt(4)
      })
    }
  }

  addToCart = (item) => { 
    const cart = [...this.state.cart, item]
    this.setState({ cart })
    // this.props.next();

  }

  removeFromCart = (index) => {
    const cart = [...this.state.cart]
    cart.splice(index, 1)
    this.setState({ cart })
  }


  display = () => {
    if (this.state.fullmenu === false) {
      const fullmenu = true
      this.setState({ fullmenu })

    }
    else {
      const fullmenu = false
      this.setState({ fullmenu })
    }
  }


  // selectButton = (e) => {
  //   e.preventDefault();
  //   alert(e.target.value)
  //   selectButton={this.selectButton} 
  //     let ID = e.target.value
  // this.setState({itemId:ID},() =>{
  //   alert(this.state.itemId + " " + " STATE IS")
  // }
  // )
  // }

  render() {

    return (
      <div>
  

        <Container fluid>
          <div className="box2">
            <h1>Top 3 features for: {this.state.name}</h1>
            <MDBBtn onClick={this.display}>Full Menu </MDBBtn>
            <Row>
              <Col size="md-3">
                {/* {this.state.fullmenu&&<ShoppingCart next={this.nextStep}/>} */}
                {this.state.fullmenu && <List addToCart={this.addToCart} next={this.nextStep} />}
                <Cart items={this.state.cart} removeFromCart={this.removeFromCart} />
              </Col>
              <Col size="md-6">

                <Carousel next={this.nextStep} addToCart={this.addToCart} result={this.state.result} currentSlide={this.state.currentSlide} onNext={() => this.setState({ currentSlide: this.state.currentSlide < this.state.result.length - 1 ? this.state.currentSlide + 1 : 0 })} onPrevious={() => this.setState({ currentSlide: this.state.currentSlide > 0 ? this.state.currentSlide - 1 : this.state.result.length - 1 })}></Carousel>

              </Col>
            </Row>
            {/* buttons */}
  
           
          </div>
        </Container>










      </div>
    );
  }
}

export default Detail;
