import React, { Component } from 'react';
import API from "../../utils/API";
// import DrinkFoodButtons from "../../Components/DrinkFoodButtons";







class Detail extends Component {


  state = {
    current: 1,
   selectedSteps: [],
  result: []


  }


  // async componentDidMount() {
  //   try {
  //     const response = await fetch(`/api/foodpage/:id`);
  //     const json = await response.json();
  //     this.setState({ data: json });
  //   } catch (error) {
  //     console.log(error);
  //   }


  async componentDidMount() {
    let newState = this.props.location.state;
    this.setState({ ...newState },()=>{
      let selectedSteps = this.state.selectedSteps

      if(selectedSteps.length < 4 || selectedSteps.includes(!1)){
    try {
      this.state.apetizers.map(main => (
        this.outside(main)
        
        
      ))
    } catch (err) {
      console.log(err)
    }
  } else {
    console.log("CASE 1 ELSE MSG")
  }
    })
    
  }

   outside = (id) => {
   
    API.getDetails(id)
      .then(res => this.setState({result:[...this.state.result,res.data]}))
      .catch(err => console.log(err))
       console.log( this.state.result)
  }




  nextStep = () => {
    /*const { current } = this.state;
    let {selectedSteps} = this.state;*/

  //    if(selectedSteps.includes(current+1) || selectedSteps.length!==3) {
  //     this.setState({ current: current + 1, selectedSteps: [...this.state.selectedSteps, current] })
  //     console.log("Next STEp 1", this.state.result)


  //   } else if (selectedSteps.includes(current+1) && selectedSteps.length!==3 ) {
  //   this.setState({ current: current + 2, selectedSteps: [...this.state.selectedSteps, current] })

  // } else {
  //   console.log("YOU fiLLED YOUR CART")
  // }
  let { current } = this.state;
  const {selectedSteps} = this.state;

  switch (current) {
    case 1:
      if(selectedSteps.length < 3 || selectedSteps.includes(!1)){
      try {
        this.state.apetizers.map(main => (
          this.outside(main)
        ))
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("CASE 1 ELSE MSG")
    }
      break;

    case 2:
        if(selectedSteps.length<3 || selectedSteps.includes(!3)){
          try {
            this.state.mainCourses.map(main => (
              this.outside(main)
            ))
          } catch (err) {
            console.log(err)
          }
        } else {
          console.log("CASE 2 ELSE MSG")
        }
          break;

    case 3:
        if(selectedSteps.length<3 || selectedSteps.includes(!3)){
      try {
        this.state.desserts.map(main => (
          this.outside(main)
        ))
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("CASE 3 ELSE MSG")
    }
      break;

    case 4:
        if(selectedSteps.length<3 || selectedSteps.includes(!3)){
          console.log("CASE 4 ELSE MSG")
        } else {
          try {
            this.state.drinks.map(main => (
              this.outside(main)
            ))
          } catch (err) {
            console.log(err)
          }
       
        }
          break;


    default:
        current = 1
        // try {
        //   this.state.apetizers.map(app => (
        //     this.outside(app)
        //   ))
        // } catch (err) {
        //   console.log(err)
        // }
        break;
  }
  }
  prevStep = () => {
    const { current } = this.state;
    const {selectedSteps} = this.state;
     const reducedSteps = selectedSteps.filter(item => {return item !== current-1})
    this.setState({ current: current - 1, selectedSteps: reducedSteps  });
  }

 




  render() {
   



    return (

      <div>
        <h1>MainPage</h1>
        <h2> {console.log("Main Page", this.state)}</h2>
        {this.state.result.map(name=>(<h1>{name.item}</h1>))}
        
        <button onClick={this.nextStep}>NExt Step</button>
        <button onClick={this.prevStep}>NExt Step</button>

          

      </div>
    );
  }
}

export default Detail;
