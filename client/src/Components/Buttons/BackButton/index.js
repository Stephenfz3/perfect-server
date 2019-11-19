import React, {Component} from 'react';

class BackButton extends Component {
 
    constructor(props){
    super(props)
    }

render()
 {
    return(
        <div>
        <button onClick={this.props.prevStep}>Back</button>
        </div>
    )
}
}
export default BackButton;