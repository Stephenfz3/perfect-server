import React, {Component} from 'react';
// import List from "./components/list"
// import Cart from "./components/cart"


class AddButton extends Component {
 
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
super(props)

    }


render() {

    return <div>
       
    <button id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.item); this.props.onClick(event)}}>Add to cart</button>
    </div>
}
}
export default AddButton;