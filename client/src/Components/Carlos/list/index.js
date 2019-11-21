import React, {Component} from 'react';
import AddButton from '../addButton';
import SelectButton from '../../SelectButton';

const items = [
    {item:"Stella",type:"Drink", price:8 },
    {item:"Amber Waves",type:"Drink", price:8 },
    {item:"La Rubia",type:"Drink" , price:8},
    {item:"Dry Ribs",type:"App", price:8 },
    {item:"Lobster Tostadas",type:"App", price:8 },
    {item:"Queso Fondido",type:"App", price:8},
    {item:"Cajun Chicken",type:"Entree", price:8 },
    {item:"NY Striploin",type:"Entree", price:8 },
    {item:"Sea Bass",type:"Entree" , price:8},
    {item:"Toffe Cake",type:"Desert" , price:8},
    {item:"Cheesecake",type:"Desert", price:8 },
    {item:"Keylime Pie",type:"Desert", price:8 },
]

// item = item type = catergory for database

export default class List extends Component {

render(){


    return <div id="items">
<table border="1">
    <tbody>
    <tr>
        <th>Add</th>
        <th>Item item</th>
        <th>Item type</th>
        <th>Item price</th>
    </tr>
    {items.map((item,index)=>{
{console.log("WELCOME TO THE JUNGLE"+item.item)}
// eslint-disable-next-line no-unused-expressions
return <tr key={index}>
    <td>
        {/* <button onClick={()=> this.props.addToCart(item)}>Add to cart</button> */}
{/* 
        <AddButton addToCart={this.props.addToCart} item={item} id={index} onClick={this.props.handleClick}/> */}

        {/* <AddButton id={item._id} value={item} addToCart={this.props.addToCart} /> */}

        <SelectButton />

        </td>
<td>{item.item}</td>
<td>{item.type}</td>
<td>${item.price}</td>    
</tr>
    })}
    </tbody>
</table>
    </div>
} 
}

