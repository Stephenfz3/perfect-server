import React, { Component } from 'react';
import AddButton from '../addButton';

export default class List extends Component {

    render() {

        return <div id="items">
            <table border="1">
                <tbody>
                    <tr>
                        <th>Add</th>
                        <th>Item item</th>
                        <th>Item type</th>
                        <th>Item price</th>
                    </tr>
                    {this.props.details.map((item, index) => {
                        // {console.log("WELCOME TO THE JUNGLE"+item.item)}

                        return <tr key={index}>
                            <td>
                                <AddButton id={item._id} value={item} addToCart={this.props.addToCart} />

                            </td>
                            <td> {item.item}</td>
                            <td>{item.type}</td>
                            <td>${item.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}

{/* <button onClick={()=> this.props.addToCart(item)}>Add to cart</button> */ }
{/* 
        <AddButton addToCart={this.props.addToCart} item={item} id={index} onClick={this.props.handleClick}/> */}
