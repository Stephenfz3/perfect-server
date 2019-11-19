import React, {Component} from 'react';



class RemoveButton extends Component {
 
    constructor(props){
super(props)

    }


render() {

    return <div>
        <button onClick={()=> this.props.removeFromCart(this.props.index)}>Remove to cart</button>
    </div>
}
}
export default RemoveButton;