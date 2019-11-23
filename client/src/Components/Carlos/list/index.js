import React, {Component} from 'react';
import AddButton from '../addButton';
import AddModal from "../../Moda"


const items = [
    {name:"Stella",type:"Drink", price:8 , videoId:"7CqJlxBYj-M"},
    {name:"Amber Waves",type:"Drink", price:8, videoId:"7CqJlxBYj-M" },
    {name:"La Rubia",type:"Drink" , price:8, videoId:"7CqJlxBYj-M"},
    {name:"Dry Ribs",type:"App", price:8, videoId:"7CqJlxBYj-M" },
    {name:"Lobster Tostadas",type:"App", price:8, videoId:"7CqJlxBYj-M" },
    {name:"Queso Fondido",type:"App", price:8, videoId:"7CqJlxBYj-M"},
    {name:"Cajun Chicken",type:"Entree", price:8, videoId:"7CqJlxBYj-M" },
    {name:"NY Striploin",type:"Entree", price:8, videoId:"7CqJlxBYj-M" },
    {name:"Sea Bass",type:"Entree" , price:8, videoId:"7CqJlxBYj-M"},
    {name:"Toffe Cake",type:"Desert" , price:8, videoId:"7CqJlxBYj-M"},
    {name:"Cheesecake",type:"Desert", price:8, videoId:"7CqJlxBYj-M" },
    {name:"Keylime Pie",type:"Desert", price:8, videoId:"vVltNtWo_XQ" },
]

// name = item type = catergory for database

export default class List extends Component {

    state = {
        modalIsOpen: false
    }

    toggleModal= () => {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }
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
    {items.map((item,index)=>{return <tr><td>
        <AddButton addToCart={this.props.addToCart} item={item} id={index} onClick={this.props.handleClick}/>
        </td>
     <td><AddModal videoId={item.videoId} name={item.name} isOpen={this.state.modalIsOpen} toggle={this.state.modalIsOpen} toggleModal={this.toggleModal}>{item.name}</AddModal></td>
<td>{item.type}</td>
<td>${item.price}</td>    
</tr>
    })}
    </tbody>
</table>
    </div>
} 
}

