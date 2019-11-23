import React, { Component } from 'react';
import API from "../../utils/API";
import Carousel from "../../Components/Carousel";
import { Col, Row, Container } from "../../Components/Grid";
import ShoppingCart from "../../Components/Carlos";
import List from "../../Components/Carlos/list"
import Cart from "../../Components/Carlos/cart";
import "../MainPage/MainPage.css";
import DisplayButton from "../../Components/displayMenuButton"

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

class Detail extends Component {

  state = {
    current: 1,
    selectedSteps: [1],
    result: [],
    skipped: [],
    currentSlide: 0,
    itemId: 0,
    cart: [],
    fullmenu: false,
    collapseID: "",
    name: "",
    details:[]

  }
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


    menuApi = (id)=>{
      API.getDetails(id)
        .then(res => {
          this.setState({ details: [...this.state.details, res.data] })
        })
        .catch(err => console.log(err))
       console.log(this.state.details)
    };
  
  
  
    switchTwo= (step) => {
      switch(step){
   
       case 1:
           try {
             console.log("STATEEEEE"+this.state.result[0])
             this.state.moreApps.forEach(main => {
               this.menuApi(main)
             })
           } catch (err) {
             console.log(err)
           }
           break;
   
         case 2:
           try {
             this.state.moreMain.forEach(main => {
               this.menuApi(main)
             })
           } catch (err) {
             console.log(err)
           }
           break;
   
         case 3:
           try {
             this.state.moreDesserts.forEach(main => {
               this.menuApi(main)
             })
           } catch (err) {
             console.log(err)
           }
           break;
   
         case 4:
           try {
             this.state.moreDrinks.forEach(main => {
               this.menuApi(main)
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
  
  
   displayMenu = () => {
        let { current } = this.state;
        if(current===1){
          console.log(this.state.details)
          this.setState({details:[]}, ()=>{
            this.switchTwo(current)
            console.log(this.state.current, "102")
          })
        } else if (current===2){
          this.setState({details:[]}, ()=>{
            this.switchTwo(current)
            console.log(this.state.details, "104")
          })

           
        } else if (current===3){
          this.setState({details:[]}, ()=>{
            this.switchTwo(current)
            console.log(this.state.details, "115")
          })

        } else if (current===4){
          this.setState({details:[]},()=>this.switchTwo(current))
        }
    }


  

    outside = (id) => {
      API.getDetails(id)
        .then(res => {
          this.setState({ result: [...this.state.result, res.data] })
        })
        .catch(err => console.log(err))
      console.log(this.state)
    };

    switchIt = (step) => {
      switch (step) {
        case 1:
          try {
            this.setState({name: "Appetizers"})
            this.state.apetizers.forEach(main => {
              this.outside(main)
            })
          } catch (err) {
            console.log(err)
          }
          break;
  
        case 2:
          try {
            this.setState({name: "Main Courses"})
            this.state.mainCourses.forEach(main => {
              this.outside(main)
            })
          } catch (err) {
            console.log(err)
          }
          break;
  
        case 3:
          try {
            this.setState({name: "Desserts"})
            this.state.desserts.forEach(main => {
              this.outside(main)
            })
          } catch (err) {
            console.log(err)
          }
          break;
  
        case 4:
          try {
            this.setState({name: "Drinks"})
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



  nextStep = () => {
    let { current } = this.state;
    let { skipped } = this.state;
    let { selectedSteps } = this.state;
    this.setState({ result: [], currentStep: this.state.currentStep + 1, fullmenu: false })

    if (current >= 4 && skipped.length > 0) {
      this.setState({ current: skipped[0], skipped: skipped.filter(item => { return item !== item[0] }), fullmenu: false }, () => {
        this.switchIt(skipped[0])
      })
      console.log("current > 4 && skipped.length > 0")
    } else if (current > 4 && skipped.length < 1) {
      console.log("All steps selected")
      return;

    } else if (selectedSteps.includes(current + 1)) {
      this.setState({ current: current + 2, skipped: [...this.state.skipped, current],fullmenu: false }, () => {
        this.switchIt(current + 2);
        console.log(selectedSteps.includes(current))
      })

    } else {

      this.setState({ current: current + 1, skipped: [...this.state.skipped, current] ,fullmenu: false}, () => {
        this.switchIt(current + 1);
        console.log(selectedSteps.includes(current))
      })
    }
  }
 
  
  // select = () => {

  // }
  async componentDidMount() {
    let newState = this.props.location.state;
    let { current } = this.state;
    this.setState({ ...newState }, () => {
      this.switchIt(current)
    })
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
      <div className="body">
  

        <Container fluid>
          <div className="box2">
            <h1>Top features for: {this.state.name}</h1>
            <Row>
              <Col size="md-3">
              <MDBCard className="menucard" style={{ width: "24rem" }}>
        
        <MDBCardBody>
          <MDBCardTitle className="title">Features</MDBCardTitle>
        
        <MDBCardText>
            
         
        <ul>
          <a onClick={this.display}><MDBIcon icon="bars" />  Full Menu </a>
          {this.state.fullmenu && <List  details={this.state.details} addToCart={this.addToCart} next={this.nextStep} />} 
          <DisplayButton displayMenu={this.displayMenu} display={this.display}></DisplayButton>
          <a><MDBIcon icon="address-book" />       Reservations</a>
          <a> <MDBIcon icon="user-check" />      Reviews</a>
          <a><MDBIcon icon="cocktail" />         Happy Hour Menu</a>
          <a><MDBIcon icon="globe-americas" />       Location</a>
          <a> <MDBIcon icon="phone" />       Contact</a>
          <a> <MDBIcon far icon="images" />      Gallery  </a>
  
        
        </ul>

        


          </MDBCardText>
          <br/>
          <br/>
          <br/>
          <br/>



          



        


          
          
        </MDBCardBody>
      
     
        

      </MDBCard>

              </Col>
              <Col size="md-6">

                <Carousel next={this.nextStep} addToCart={this.addToCart} result={this.state.result} currentSlide={this.state.currentSlide} onNext={() => this.setState({ currentSlide: this.state.currentSlide < this.state.result.length - 1 ? this.state.currentSlide + 1 : 0 })} onPrevious={() => this.setState({ currentSlide: this.state.currentSlide > 0 ? this.state.currentSlide - 1 : this.state.result.length - 1 })}></Carousel>

              </Col>
              
              
              <Col size="">
              <MDBCol>
      <MDBCard className="cartcard" style={{ width: "22rem" }}>
  
        <MDBCardBody>
          <MDBCardTitle className="title2">Cart</MDBCardTitle>
          <MDBCardText>
        
          <Cart className="whatever col-2 offset-10"items={this.state.cart} removeFromCart={this.removeFromCart} />

        
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
\
              </Col>
            </Row>
  
           
          </div>
        </Container>





       
<br/>
<br/>
<br/>


      </div>
    );
  }
}

export default Detail;
