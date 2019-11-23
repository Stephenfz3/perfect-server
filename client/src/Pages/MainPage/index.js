import React, { Component } from 'react';
import API from "../../utils/API";
import Carousel from "../../Components/Carousel"
import Youtube from "react-youtube";
import BackButton from "../../Components//Buttons/BackButton";
// import { getEnabledCategories } from 'trace_events';
import SkipButton from "../../Components/Buttons/SkipButton";
import AddButton from "../../Components/Carlos/addButton";
import { Col, Row, Container } from "../../Components/Grid"
import ShoppingCart from "../../Components/Carlos"
import AddModal from "../../Components/Moda"
import List from "../../Components/Carlos/list"
class Detail extends Component {

  state = {
    current: 1,
    selectedSteps: [1,3],
    result: [],
    skipped: [],
    currentSlide:0,
    cart: [],
    videoId: "",
  }


  addToCart = (item) => {
    const cart = [...this.state.cart, item]
    this.setState({ cart }, ()=>{this.nextStep()})
  }

  handleClick = e => {
    e.preventDefault();
    alert("try me");
    if (!e.target.id) {
      const videoId = "diT3FvDHMyo";

      this.setState({
        videoId
      });
    }
    const videoId = e.target.videoId

    this.setState({
      videoId
    },()=>{
      return(
      <React.Fragment>
        {alert("inside try me")}
    <Youtube videoId={this.state.videoId} className="d-block w-100" alt="..." />
      {/* <span> {e.target.item} </span>
      <p>{e.target.description}</p> */}
      <AddButton onClick={this.addToCart}  />
      <SkipButton nextStep={this.nextStep} />
      <BackButton prevStep={this.prevStep} />
      </React.Fragment>
)
    });
  };

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
   componentDidMount() {
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
  };

  getCategory=()=>{
    API.getDetails({category: "food"})
    .then(res => {
      this.setState({ category: [...this.state.category, res.data] })
    })
    .catch(err => console.log(err))
  console.log(this.state.category)
  }
  
  render() {
    return (
      <Container fluid>
      <div>
        <h1>MainPage</h1>
        <button onClick={this.getCategory} >Category</button>
        <h2> {console.log(this.state.result)}</h2>
        <Row>
          <Col size="md-3">
        <ShoppingCart next={this.nextStep}/>
          </Col>
          <Col size="md-6">
            <Carousel handleClick={this.handleClick} result={this.state.result} addToCart={this.addToCart} nextStep={this.nextStep} prevStep={this.prevStep} currentSlide={this.state.currentSlide}  onNext={()=>this.setState({currentSlide:this.state.currentSlide<this.state.result.length-1?this.state.currentSlide+1:0})} onPrevious={()=>this.setState({currentSlide:this.state.currentSlide>0?this.state.currentSlide-1:this.state.result.length-1})}></Carousel>
          </Col>
        </Row>
        <div>
         <List />
        </div>
        {/* buttons */}
        {/* <button onClick={this.select}>Select</button>
        <button onClick={this.nextStep}>Skip</button>
        <button onClick={this.prevStep}>Back</button> */}
      </div> 
      </Container>
    );
  }
}

export default Detail;
