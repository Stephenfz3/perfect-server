import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class DrinkFood extends Component {
    render() {
        return (
            <div>
                <div><h1>What are you in the mood for</h1></div>
                <br/> 
               
                <Link to={'/foodPage'} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeC-WdlQ1dzQ8ogIapX6HzG0XGZMmDjlD9s_pHpx0jmyW27yphw&s" class="rounded float-left" alt="...">

                </img>
                </Link>
               
<Link to={'/drinkPage'}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQN6jhWyUn-Q109POnKBVVBH9SeGS2Yjg9AS3uLWuHNsppr3RFA&s" class="rounded float-right" alt="..."></img></Link>
            </div>
        )
    }
}


export default DrinkFood;