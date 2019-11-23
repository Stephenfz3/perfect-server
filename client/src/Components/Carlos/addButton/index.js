import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import "../addButton/addbutton.css"
// import List from "./c/omponents/list"
// import Cart from "./components/cart"


class AddButton extends Component {
 
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
super(props)

    }

render() {
console.log(this.props.value)
    return <div >
       
    {/* <button id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.item)
        
        ; this.props.handleClick(event)}}>Add to cart</button> */}
   

          <MDBIcon className="addbtn" id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.value)}} icon="plus-circle" />


        

          

    </div>
}
}
export default AddButton;