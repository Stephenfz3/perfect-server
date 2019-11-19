import React, { Component } from 'react';
import API from "../../utils/API";
import Carousel from "../../components/Carousel"
import { Col, Row, Container } from "../../components/Grid"

class Detail extends Component {

  state = {
    current: 1,
    selectedSteps: [1,3],
    result: [],
    skipped: []
  }



  nextStep = () => {
    let { current } = this.state;
    let {skipped} = this.state;
    let { selectedSteps } = this.state;
    this.setState({ result: [] })

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
          this.state.apetizers.map(main => (
            this.outside(main)
          ))
        } catch (err) {
          console.log(err)
        }
        break;

      case 2:
        try {
          this.state.mainCourses.map(main => (
            this.outside(main)
          ))
        } catch (err) {
          console.log(err)
        }
        break;

      case 3:
        try {
          this.state.desserts.map(main => (
            this.outside(main)
          ))
        } catch (err) {
          console.log(err)
        }
        break;

      case 4:
        try {
          this.state.drinks.map(main => (
            this.outside(main)
          ))
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
      .then(res => this.setState({ result: [...this.state.result, res.data] }))
      .catch(err => console.log(err))
    console.log(this.state.result)
  }
  

  prevStep = () => {
    this.setState({ result: [] })
    const { current } = this.state;
    const { selectedSteps } = this.state;
    const reducedSteps = selectedSteps.filter(item => { return item !== current - 1 })
    if(current!=1){
    this.setState({ current: current - 1, selectedSteps: reducedSteps }, ()=> {
      this.switchIt(current-1)
    })
  } else {
    this.setState({ current: 4}, ()=> {
      this.switchIt(4)
    })
  }
  };

  carouselIndex=()=>{
  
  }

  render() {
    return (
      <Container fluid>
      <div>
        <h1>MainPage</h1>
        <h2> {console.log(this.state.result)}</h2>
        {/* {this.state.result.map(item=> {return })}  */}
        <Row>
          <Col size="md-6">
            <Carousel onClick={this.nextStep} {...this.state.result[0]}></Carousel>
           

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
