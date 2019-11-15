import React, { Component } from 'react';
import API from "../../utils/API";
class Detail extends Component {


  state = {
    current: 1,
    cart: [{
      apetizers: "",
      desserts: "",
      mainCourses: "",
      drinks: ""
    }]

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
    this.setState({ ...newState })
  }

  nextStep = () => {
    const { current } = this.state;
    this.setState({ current: current + 1 })
  };

  prevStep = () => {
    const { current } = this.state;
    this.setState({ current: current - 1 });
  }

  outside = (id) => {
    API.getDetails(id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }




  render() {
    const { current } = this.state;
    switch (current) {
      case 1:
        try {
          this.state.apetizers.map(app => (
            this.outside(app)
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
        };
        break;

      case 3:
        try {
          this.state.desserts.map(dessert => (
            this.outside(dessert)
          ))
        } catch (err) {
          console.log("Dessert", err)
        };
        break;

      case 4:
        try {
          this.state.drinks.map(drink => (
            this.outside(drink)
          ))
        } catch (err) {
          console.log("Drink", err)
        };
        break;


      default:
          try {
            this.state.apetizers.map(app => (
              this.outside(app)
            ))
          } catch (err) {
            console.log(err)
          }
          break;
    }



    return (

      <div>
        <h1>MainPage</h1>
        <h2> {console.log("Main Page", this.state)}</h2>
        <button onClick={this.nextStep}>NExt Step</button>



      </div>
    );
  }
}

export default Detail;