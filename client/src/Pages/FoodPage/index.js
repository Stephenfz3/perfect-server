/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import API from "../../utils/API";

class foodpage extends Component {
    constructor(props){
        super(props)
    }
    state = {
        foodPairings: [],
        name: "",
        app: [],
        mainCourse: [],
        dessert: [],
        drink: [],
        image:""
      };
   
      foodClicked = (item) => {
          this.setState({app: item.apetizers, mainCourse: item.mainCourses, dessert: item.desserts, drink: [...item.drinks]})
          console.log(this.state)
      }
      componentDidMount() {
            this.loadFoods()
           };
      
            
    
      loadFoods = () => {
          API.getFoodPair()
          .then(res =>this.setState({foodPairings: res.data})
          )
          .catch(err => console.log(err))
        }
       
     
    render() { 
        return ( 
            <div>
            <button onClick={this.Clicked}>Click</button>

              {this.state.foodPairings.map((food,index)=>
                <li key={index}><button classname="btn btn-primary" onClick={()=>this.foodClicked(food)}>{food.name}</button></li>)}
            
        
         </div>
        )
}
}
 
export default foodpage ;