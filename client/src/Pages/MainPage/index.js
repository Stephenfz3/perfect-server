import React, { Component } from 'react';
import API from "../../utils/API";
import Carousel from "../../Components/Carousel"
import { Col, Row, Container } from "../../Components/Grid"
import ShoppingCart from "../../Components/Carlos"
import List from "../../Components/Carlos/list"
import Cart from"../../Components/Carlos/cart"
class Detail extends Component {

  state = {
    current: 1,
    selectedSteps: [1,3],
    result: [],
    skipped: [],
    currentSlide:0,
    itemId:0,
    cart:[],
    fullmenu:false,
  //   menu:[{ 

  //     apps:
      
  //     [{item:"Dry Ribs",type:"App", price:8},
  //   {item:"Lobster Tostadas",type:"App", price:8 },
  //   {item:"Chicken Sliders",type:"App", price:8 },
  //   {item:"Spicy Tuna Roll",type:"App", price:8 },
  //   {item:"Street Tacos",type:"App", price:8 },
  //   {item:"Buffalo Cauliflower",type:"App", price:8 },
  //   {item:"Korean Wings",type:"App", price:8 },
  //   {item:"Hot Wings",type:"App", price:8 },
  //   {item:"Guac and Chips",type:"App", price:8 },
  //   {item:"Dragon Roll",type:"App", price:8 },
  //   {item:"Spinach Dip",type:"App", price:8 },],  

  //   drinks:
    
  //   [{item:"Mojito",type:"Drink", price:8 },
  //   {item:"Old Fashioned",type:"Drink" , price:8},
  //   {item:"Margartia",type:"Drink", price:8 },
  //   {item:"Moscoe Mule",type:"Drink", price:8 },
  //   {item:"Cosmopolitan",type:"Drink", price:8 },
  //   {item:"Wakefield IPA",type:"Drink", price:8 },
  // ],

  //   wines:

  //   [{item:"Stags Leap Cabernet",type:"wine", price:8},
  //   {item:"Lake Sonoma Cabernet",type:"wine", price:8},
  //   {item:"The Prisoner",type:"wine", price:8},
  //   {item:"Silver Oak",type:"wine", price:8},
  //   {item:"Miraval Rose",type:"wine", price:8},
  //   {item:"Scarpetta",type:"wine", price:8},],

  //   entrees:
    
  //   [{item:"Cajun Salmon",type:"Entree", price:8 },
  //   {item:"Santa Fe Chicken Salad",type:"Entree", price:8 },
  //   {item:"Scallop Rissotto",type:"Entree" , price:8},
  //   {item:"BBQ Ribs",type:"Entree", price:8 },
  //   {item:"Crispy Chicken Sandwich",type:"Entree", price:8 },
  //   {item:"Filet Tenderloin",type:"Entree", price:8 },
  //   {item:"Cheddar Burger",type:"Entree", price:8 },
  //   {item:"Bimimbap",type:"Entree", price:8 },
  //   {item:"Poke Bowl",type:"Entree", price:8 },],



  //   desert:
    
  //   [{item:"Smores Cheesecake",type:"Desert", price:8 },
  // ]


  //   }]
  }

  nextStep = () => {
    let { current } = this.state;
    let {skipped} = this.state;
    let { selectedSteps } = this.state;
    this.setState({ result: [],currentStep:this.state.currentStep+1 })

    if (current >= 4 && skipped.length > 0) {
      this.setState({current: skipped[0], skipped: skipped.filter(item => { return item !== item[0] })},()=>{
        this.switchIt(skipped[0])
      })
      console.log("current > 4 && skipped.length > 0")
    } else if (current > 4 && skipped.length < 1){
      console.log("All steps selected")
      return;
    
    } else if (selectedSteps.includes(current+1)) {
      this.setState({ current: current +2, skipped: [...this.state.skipped, current]}, () => {
        this.switchIt(current+2);
        console.log(selectedSteps.includes(current))
      })
 
    } else {
      
      this.setState({ current: current+1, skipped: [...this.state.skipped, current]}, () => {
        this.switchIt(current+1);
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
    let {current} = this.state;
    this.setState({ ...newState },() => {
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
    if(current!==1){
    this.setState({ current: current - 1, selectedSteps: reducedSteps }, ()=> {
      this.switchIt(current-1)
    })
  } else {
    this.setState({ current: 4}, ()=> {
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
    this.setState({ cart })  }

  
    display = ()=> {
if(this.state.fullmenu===false){
const fullmenu=true
this.setState({ fullmenu }) 

}
else{
  const fullmenu=false
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
      <Container fluid>
      <div>
        <h1>MainPage</h1>
        <button onClick={this.display}>FULL MENU</button>
        <h2> {console.log(this.state.result)}</h2>
        <Row>
          <Col size="md-3">
        {/* {this.state.fullmenu&&<ShoppingCart next={this.nextStep}/>} */}
        {this.state.fullmenu&&<List addToCart={this.addToCart} />}
        <Cart items={this.state.cart} removeFromCart={this.removeFromCart} />
          </Col>
          <Col size="md-6">
            <Carousel nextStep={this.nextStep} addToCart={this.addToCart} result={this.state.result} currentSlide={this.state.currentSlide}  onNext={()=>this.setState({currentSlide:this.state.currentSlide<this.state.result.length-1?this.state.currentSlide+1:0})} onPrevious={()=>this.setState({currentSlide:this.state.currentSlide>0?this.state.currentSlide-1:this.state.result.length-1})}></Carousel>
          </Col>
        </Row>
        {/* buttons */}
        <button onClick={this.select}>Select</button>
        <button onClick={this.nextStep}>Skip</button>
        <button onClick={this.prevStep}>Back</button>
      </div> 
      </Container>
    );
  }
}

export default Detail;
