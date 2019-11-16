/* eslint-disable default-case */
import React,{Component} from 'react';
import './App.css';
// import TypesOfFood from './components/TypeOfFood';
// import FoodCategory from './components/FoodCategory';
// import {items} from './data/items';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
import DrinkFoodPage from './Pages/DrinkFoodPage';
import foodpage from "./Pages/FoodPage/index";
import drinkpage from "./Pages/DrinkPage"
import MainPage from "./Pages/MainPage"

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            typeOfFood:null,
            currentCategory:null,
            order:[]
        }
    }
    selectFoodType=(food)=>{
      this.setState({typeOfFood:food,currentCategory:"apetizers"})
    }

    selectItem=(item)=>{
      let newCategory=null;
      switch(this.state.currentCategory)
      {
        case "apetizers":
          newCategory="mainCourses";
          break;
        case "mainCourses":
            newCategory="desserts";
            break;
        case "desserts":
            newCategory="drinks";
            break;
      }
      this.setState({currentCategory:newCategory,order:[...this.state.order,item]})
    }
    render()
    {
      return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/drinkfood" component={DrinkFoodPage} />
          <Route exact path="/foodpage" component={foodpage} />
          <Route exact path="/drinkpage" component={drinkpage} />
          <Route exact path="/foodpage/:id" component={MainPage} />
        </Switch>
      </div>
    </Router>
      )
        // if(!this.state.typeOfFood)
        //   return <TypesOfFood onFoodSelected={this.selectFoodType} />;
        // else if(this.state.currentCategory)
        //   return <FoodCategory category={this.state.currentCategory} onItemSelected={this.selectItem} items={items.filter(item=>this.state.typeOfFood[this.state.currentCategory].includes(item.id))} />;
        // else
        //   return <div>
        //     <h1>This is your order:</h1>
        //     <div>{JSON.stringify(this.state.order)}</div>
        //   </div>
    }
}
export default App;
