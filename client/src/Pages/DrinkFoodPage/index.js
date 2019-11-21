import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Pages/DrinkFoodPage/drinkfood.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import foodpage from '../FoodPage';
import { Redirect } from 'react-router-dom';


class DrinkFood extends Component {
    redirect = () => {
        //Better React Solution
        window.location.replace("foodPage");
        // console.log("Hello World!");
        //   return <Redirect to="/foodpage" />;
      };
      
    render() {
        return (
            <div>


                <div><h1>What are you in the mood for?</h1></div>
                <div className="row col-12">

                    <div className="card1 offset-3">
                        <MDBCol className="">
                            <MDBCard style={{ width: "26rem" }}>
                       
                                <MDBCardImage className="img-fluid" src="https://img4.goodfon.com/wallpaper/nbig/5/ae/iaponskaia-kukhnia-moreprodukty-assorti.jpg" height="" width="" waves />
                               
                                <MDBCardBody>
                                    <MDBCardTitle>Food</MDBCardTitle>
                                    <MDBCardText>
                                        Select this to see options of delicious foods. Nom Nom Nom!
                                    <br/>
                                    <br/>

                                     
                                    </MDBCardText>
                                    <MDBBtn onClick={this.redirect} className="header pt-3 peach-gradient">Select </MDBBtn>
                                    
                                    
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
          
                    <div className="card2 col-">
                        <MDBCol>
                            <MDBCard style={{ width: "26rem" }}>
                                <MDBCardImage className="img-fluid" src="https://i.imgur.com/frgLB7o.jpg?1" height="" width="500" waves/>
                                <MDBCardBody>
                                    <MDBCardTitle>Drinks</MDBCardTitle>
                                    <MDBCardText>
                                        Select this to see options of alcholic and non-alcholic beverages. Cheers, mate!
                                        <br/>
                                        <br/>
                                        
                                        
                
                                    </MDBCardText>
                                    <MDBBtn className="header pt-3 peach-gradient" href="#" to="/foodpage/:id">Select</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>

                </div>
            </div>


        )
    }
}


export default DrinkFood;