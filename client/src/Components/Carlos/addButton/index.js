import React, {Component} from 'react';
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

    <button id={this.props.id} onClick={(event) => { this.props.addToCart(this.props.value)}}>Add to cart</button>

    </div>
}
}
export default AddButton;