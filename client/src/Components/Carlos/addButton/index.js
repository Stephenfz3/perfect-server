import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import List from "./components/list"
// import Cart from "./components/cart"

class AddButton extends Component {
 
    constructor(props){
    super(props)
    }


render() {
console.log(this.props.value)
    return <div>
       
    {/* <button id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.item)
        
        ; this.props.handleClick(event)}}>Add to cart</button> */}
          <MDBBtn className="peach-gradient" id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.value)}}>Add to cart</MDBBtn>


        

          

    </div>
    
}
}
export default AddButton;