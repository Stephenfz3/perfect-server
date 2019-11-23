import React, {Component} from 'react';
import "../removeButton/removebutton.css";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

class RemoveButton extends Component {
 
    constructor(props){
super(props)

    }


render() {

    return <div>
    <MDBIcon  className="icon" far icon="trash-alt" onClick={()=> this.props.removeFromCart(this.props.index)}></MDBIcon>
    </div>
}
}
export default RemoveButton;