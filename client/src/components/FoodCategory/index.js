import React,{Component} from 'react';
import {items} from '../../data/items';

class FoodCategory extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            declined:false
        }
    }
    selectItem=(item)=>{
        this.props.onItemSelected(item);
        this.setState({declined:false});
    }
    render()
    {
        return !this.state.declined?
        <div className="row">
            <div className="col-6 offset-3">
                <h1>Here is our recommended {this.props.category}</h1>
                <h5>{this.props.items[0].name}</h5>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.items[0].video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="row">
                    <div className="col-6">
                        <button onClick={()=>this.selectItem(this.props.items[0])} className="btn btn-success">Order this</button>
                    </div>
                    <div className="col-6">
                        <button onClick={()=>this.setState({declined:true})} className="btn btn-danger">Order Something Else</button>
                    </div>
                </div>
            </div>
        </div>:
        <div className="row">
            <div className="col-6 offset-3">
            <h5>What would you prefer?</h5>
            <ul>
                {this.props.items.map((item,index)=><li key={index}>
                    <button className="btn btn-primary" onClick={()=>this.selectItem(item)}>{item.name}</button>
                </li>)}
            </ul>
            </div></div>
    }
}
export default FoodCategory;