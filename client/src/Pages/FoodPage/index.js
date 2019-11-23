/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import API from "../../utils/API";
import { Link } from 'react-router-dom';
import '../FoodPage/FoodPage.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import DrinkFoodButtons from '../../Components/DrinkFoodButtons';
class foodpage extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        foodPairings: [],
        name: "",

    };

    foodClicked = (item) => {
        this.setState({ app: item.apetizers, mainCourses: item.mainCourses, dessert: item.desserts, drink: [...item.drinks] })
    }
    componentDidMount() {
        this.loadFoods()
        this.setState({ ...this.state.foodPairings })
    };


    loadFoods = () => {
        API.getFoodPair()
            .then(res => this.setState({ foodPairings: res.data })
            )
            .catch(err => console.log(err))
    }


    render() {
        console.log("over here"+this.state.foodPairings);
        return (
            <div>
                
               


                    <div className="foodcategory"><h2>Choose a food category:</h2></div>
                {this.state.foodPairings.map((food, index) =>

                    <div className="card1 col-3 offset-">
                        <MDBCol className="">
                            <MDBCard key={food._id} style={{ width: "24rem" }} >

                                <MDBCardImage className="img-fluid" src={food.image} height="" width="" waves />

                                <MDBCardBody>
                                    <MDBCardTitle>{food.name}</MDBCardTitle>
                                    <MDBCardText>
                                        {food.description}
                <br />
                                        <br />
                                        <Link to={{
                                            pathname: "/foodpage/" + food._id,
                                            state: { ...food }
                                        }} >
                                            
                                            <MDBBtn onClick={() => this.foodClicked(food)} className="header pt-3 peach-gradient">Select </MDBBtn>
                                        </Link>

                                    </MDBCardText>



                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>

                    // <li key={food._id}>
                    //     <button onClick={() => this.foodClicked(food)}>
                    //         {food.name}

                    //         <Link to={{
                    //             pathname: "/foodpage/" + food._id,
                    //             state: { ...food }
                    //         }} >
                    //             <img {...food} alt=".." src={food.image} />
                    //         </Link>
                    //     </button>
                    // </li>
                )}


            </div>
        )
    }
}

export default foodpage;