import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import List from "./components/list"
// import Cart from "./components/cart"


class AddButton extends Component {
 
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
super(props)

    }


render() {
console.log(this.props.value)
    return <div>
       
    {/* <button id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.item)
        
        ; this.props.handleClick(event)}}>Add to cart</button> */}
          <MDBBtn className="peach-gradient" id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.value)}}>Add to cart</MDBBtn>
         
          <MDBBtn className="peach-gradient" >Previous</MDBBtn>
          
          <MDBBtn className="peach-gradient" next={this.props.next}>Next Category </MDBBtn>
          
          <MDBBtn className="peach-gradient" onNext={this.props.onNext}>Next </MDBBtn>
         

    

    </div>
}
}
export default AddButton;