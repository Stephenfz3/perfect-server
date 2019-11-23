import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../Pages/HomePage/homepage.css'

class Jumbotron extends Component {
   
    render() {
        return (
          <div>
<div className = "row">
  
  <div className="col-12">
    {this.props.session&& <h1>
      Hello, {this.props.session.name}</h1>}
  </div>
</div>,

<div  className="jumbotron">
  <h2 className="welcome display-4">Welcome to the Perfect Server application</h2>
  <div className="bg">
  <p className="p1 lead">
This is a virtual server application. This app will guide you through a 5 star experience at a restaurant of your choosing. Here you will find everything you need, through interactive questions we create a flow of conversation that easily guides you to what you want, then shows you exactly what it looks like. A server or bartender will hold the item while explain it to you the way an expert would. It takes the guess work out of your ordering experience and gives you full confidence in your choices. Through high quality video and curated audio we give you a window into your potential future and give you the power to choose your own destiny. When it’s time to start exploring click the start button </p>
  </div>
  <span className="my-4">
    <br/>
    
  <p className="p1">To start exploring restaurant's favorite reccomendations just press "Start</p>
  <Link className ="btn btn-primary " to="/login" role="button">Start</Link>
</span>

</div> 



</div>


 )
      
    }

}
export default Jumbotron;