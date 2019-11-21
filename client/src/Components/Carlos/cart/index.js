import React, {Component} from 'react';
import List from "../list";
import AddButton from "../addButton"
import RemoveButton from '../removeButton';
class Cart extends Component {
 
    constructor(props){
        super(props)
        
            }
    
      total(){
          return this.props.items.reduce((total,item)=>{
              return total + item.price
          }, 0)
      }
    
      render(){
          console.log("OVERHERE BRO"+this.props.items)
if(this.props.items === 0){
    return <div id="cart">
        <p>Cart is empty</p>
    </div>
}

        return <div id="cart">
    <table border="1">
        <tbody>
        <tr>
        <th>Remove</th>
            <th>Item name</th>
            <th>Item type</th>
            <th>Item price</th>
        </tr>
        {this.props.items.map((item,index)=>{
    
    return <tr key={index}>
        <td>
            <RemoveButton removeFromCart={this.props.removeFromCart}/>
            {/* <RemoveButton /> */}
            </td>
    <td>{item.item}</td>
    <td>{item.type}</td>
    <td>${item.price}</td>    
    </tr>
        })}
        </tbody>
    </table>
    <p>
        Total: ${this.total()}
    </p>
        </div>
    } 
     ;
   }

   export default Cart;