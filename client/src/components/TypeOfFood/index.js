import React,{Component} from 'react';
import {typesOfFood} from '../../data/typesOfFood';

class TypeOfFood extends Component
{
    

    render()
    {
        return <div className="row">
            <div className="col-6 offset-3">
                <h5>What are you up to today?</h5>
                <ul>
                    {typesOfFood.map((food,index)=><li><button className="btn btn-primary" onClick={()=>this.props.onFoodSelected(food)} key={index}>{food.name}</button></li>)}
                </ul>
            </div>
        </div>
    }
}
export default TypeOfFood;