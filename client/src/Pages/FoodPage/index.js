/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import API from "../../utils/API";
import {Link} from 'react-router-dom';

class foodpage extends Component {
    constructor(props){
        super(props)
    }
    state = {
        foodPairings: [],
        name: "",
        
      };
   
      foodClicked = (item) => {
          this.setState({app: item.apetizers, mainCourses: item.mainCourses, dessert: item.desserts, drink: [...item.drinks]})
      }
      componentDidMount() {
            this.loadFoods()
            this.setState({...this.state.foodPairings})
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
                <li key={food._id}>
                    <button className="btn btn-primary" onClick={()=>this.foodClicked(food)}>
                    {food.name}
                    <Link to={{
                    pathname: "/foodpage/"+ food._id,
                    state:{...food}
                }} >
                    <img {...food} alt=".." src={food.image}/>
                        </Link>
                        </button>
                        </li>
                        )}
            

         </div>
        )
}
}
 
export default foodpage ;