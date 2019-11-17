import React, { Component } from 'react';
import API from "../../utils/API";
// import DrinkFoodButtons from "../../Components/DrinkFoodButtons";



class Detail extends Component {


  state = {
    current: 1,
   selectedSteps: [1,2],
   skipped:[],
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
    let { current } = this.state;

    const {selectedSteps} = this.state;
    const { skipped } = this.state;
    this.setState({result:[]})
    
     if (selectedSteps.length >= 4) {
      console.log("YOU fiLLED YOUR CART")

    
    } else if (selectedSteps.includes(!current)) {
      this.setState({ current: (current +1), skipped: [...this.state.skipped, current++] })
      console.log("ELSE IF STATEMENT INSIDE NEXTSTEP", (selectedSteps.includes(!current)) )

  } else {

    this.setState({ current: current + 2, selectedSteps: [...this.state.selectedSteps, current+2] })
    console.log("LAST ELSE", this.state.current+1)
    console.log("ELSE STATEMENT inside NEXT STEP",(selectedSteps.includes(!current)) )

  }
  

  switch (current) {
    case 1:
        if( selectedSteps.includes(!1) || selectedSteps.length<4 ){
          try {
        this.state.apetizers.map(main => (
          this.outside(main)
        ))
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("CASE 1 ELSE MSG", selectedSteps.length<4 && selectedSteps.includes(!1))
    }
      break;

    case 2:
        if( selectedSteps.includes(!2) || selectedSteps.length<4 ){
          try {
            this.state.mainCourses.map(main => (
              this.outside(main)
            ))
          } catch (err) {
            console.log(err)
          }
        } else {
          console.log("CASE 2 ELSE MSG", selectedSteps.length<4 && selectedSteps.includes(!2))
        }
          break;

    case 3:
        if( selectedSteps.includes(!3) || selectedSteps.length<4 ){
          try {
        this.state.desserts.map(main => (
          this.outside(main)
        ))
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("CASE 3 ELSE MSG", selectedSteps.length<4 && selectedSteps.includes(!3))
    }
      break;

    case 4:
        if(selectedSteps.length<4 && selectedSteps.includes(!4)){
          try {
            this.state.drinks.map(main => (
              this.outside(main)
            ))
          } catch (err) {
            console.log(err)
          }
          
        } else {
          console.log("CASE 4 ELSE MSG", selectedSteps.length<4 && selectedSteps.includes(!4))
       
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
<<<<<<< HEAD
        {this.state.result.map(name=> (<h1>{name.item}</h1>))}
=======
        {this.state.result.map((name, index)=>(<h1 key={index}>{name.item}</h1>))}
>>>>>>> 73822ffdd338ffc6ce1ecfd4995546a5a5f2fdc5
        
        <button onClick={this.nextStep}>Skip</button>
        <button onClick={this.prevStep}>Back</button>

          

      </div>
    );
  }
}

export default Detail;
