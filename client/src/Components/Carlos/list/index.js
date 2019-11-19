import React, {Component} from 'react';
import AddButton from '../addButton';


const items = [
    {name:"Stella",type:"Drink", price:8 },
    {name:"Amber Waves",type:"Drink", price:8 },
    {name:"La Rubia",type:"Drink" , price:8},
    {name:"Dry Ribs",type:"App", price:8 },
    {name:"Lobster Tostadas",type:"App", price:8 },
    {name:"Queso Fondido",type:"App", price:8},
    {name:"Cajun Chicken",type:"Entree", price:8 },
    {name:"NY Striploin",type:"Entree", price:8 },
    {name:"Sea Bass",type:"Entree" , price:8},
    {name:"Toffe Cake",type:"Desert" , price:8},
    {name:"Cheesecake",type:"Desert", price:8 },
    {name:"Keylime Pie",type:"Desert", price:8 },
]

// name = item type = catergory for database

export default class List extends Component {

render(){


    return <div id="items">
<table border="1">
    <tbody>
    <tr>
        <th>Add</th>
        <th>Item name</th>
        <th>Item type</th>
        <th>Item price</th>
    </tr>
    {items.map((item,index)=>{

// eslint-disable-next-line no-unused-expressions
return <tr key={index}>
    <td>
        {/* <button onClick={()=> this.props.addToCart(item)}>Add to cart</button> */}

        <AddButton addToCart={this.props.addToCart} item={item} id={index} onClick={this.props.handleClick}/>
        

        </td>
<td>{item.name}</td>
<td>{item.type}</td>
<td>${item.price}</td>    
</tr>
    })}
    </tbody>
</table>
    </div>
} 
}

