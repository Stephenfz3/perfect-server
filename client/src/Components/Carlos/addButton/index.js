import React, {Component} from 'react';
// import List from "./components/list"
// import Cart from "./components/cart"

class AddButton extends Component {
 
    constructor(props){
    super(props)
    }
    
    
    
render()
 {
    return(
         <div>
    <button id="style" handleClick={this.props.handleClick}>Add to cart</button>
    </div>
    )
}
}
export default AddButton;