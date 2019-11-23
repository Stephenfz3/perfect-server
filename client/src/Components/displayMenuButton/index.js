import React, {Component} from 'react';
import { MDBBtn } from 'mdbreact';
// import List from "./components/list"
// import Cart from "./components/cart"


class DisplayButton extends Component {
constructor(props){
    super(props)
}
render(){
    return(
        <React.Fragment>
    <MDBBtn onClick={(event)=>{this.props.displayMenu(event); this.props.display();}} > X MENU </MDBBtn>
    </React.Fragment>
    )
}
}
export default DisplayButton;

