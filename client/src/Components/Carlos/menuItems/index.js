import React, {Component} from 'react';


export default class MenuItems extends Component {

constructor(props){

    super(props)
}

    render(){


return <div>
    <td>{this.props.menu.item}</td>
</div>
    }



}