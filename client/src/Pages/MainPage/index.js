import React, { Component } from 'react';
import API from "../../utils/API";

class Detail extends Component {

  state = {
    current: 1,
    nextStep: 2,
    selectedSteps: [1,3],
    skipped: [],
    result: []
  }


  // selectedSteps: selectedSteps.filter(step=>{return step !==current-1})

  nextStep = () => {
    let { current } = this.state;
    let { selectedSteps } = this.state;
    let { nextStep } = this.state
    this.setState({ result: [] })

    if (current > 4 ) {
      console.log("YOU fiLLED YOUR CART")
      return;
    } else if (selectedSteps.includes(current+1)) {
      this.setState({ current: current +2, nextStep: nextStep + 2 }, () => {
        this.switchIt(current+2);
        // console.log("Line 30, current stage is: ", current)
        console.log(selectedSteps.includes(current))
      })
 
    } else {
      
      this.setState({ current: current+1, skipped: [...this.state.skipped, current], nextStep: nextStep+1 }, () => {
        this.switchIt(current+1);
        console.log(selectedSteps.includes(current))
      // console.log("Line 26 current stage is: ", current)
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

  async componentDidMount() {
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
    this.setState({ current: current - 1, selectedSteps: reducedSteps });
  }

  render() {
    return (
      <div>
        <h1>MainPage</h1>
        <h2> {console.log("Main Page", this.state)}</h2>
        {this.state.result.map((name, index) => (<h1 key={index}>{name.item}</h1>))}

        <button onClick={this.nextStep}>Skip</button>
        <button onClick={this.prevStep}>Back</button>
      </div>
    );
  }
}

export default Detail;
