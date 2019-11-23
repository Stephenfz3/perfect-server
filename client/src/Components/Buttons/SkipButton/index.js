import React, {Component} from 'react';

class SkipButton extends Component {
 
    constructor(props){
    super(props)
    }

render()
 {
    return(
        <div>
        <button onClick={this.props.nextStep}>Skip</button>
        </div>
    )
}
}
export default SkipButton;