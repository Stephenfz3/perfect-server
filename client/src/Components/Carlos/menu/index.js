import React, {Component} from 'react';
import MenuItems from '../menuItems'

class Menu extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
      super(props)}
    
    render(){

return <div>
  <table class="table" >
    <tbody>
    <tr>
        <th>Item</th>
        
    </tr>
    {this.props.menu.map((item,index)=>{

return <tr key={index}>
    <td>
        <MenuItems menu={item} key={index}/>
        
   </td>

</tr>
    })}
    </tbody>
</table>
</div>
}
}

    export default Menu;
//     {console.log("menu component item key", this.props.menu.key)}
// {/* <p>
//   {this.props.menu.item}
//   {this.props.menu.description}
// </p> */}


// <table border="1">
//     <tbody>
//     <tr>
//         <td>{this.props.menu.item}</td>
//         {/* <th> {this.props.menu.description}</th> */}
//     </tr>
//     </tbody>
// </table>
