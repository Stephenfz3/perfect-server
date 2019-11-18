import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../../Pages/HomePage/homepage.css'

class Jumbotron extends Component {
   
    render() {
        return (
<div className = "row">
  <div className="col-12">
    {this.props.seesion&& <h1>
      Hello, {this.props.session.name}</h1>}
  </div>
</div>,

<div  className="jumbotron">
  <h2 className="display-4">Welcome to the Perfect Server application</h2>
  
  <p className="lead">This is a Virtual Server application. Created to aid in food drinks pairing based on customers preference.</p>
  <span className="my-4">
    <br/>
    <br/>
    <br/>
   
  <p>To start exploring restaurant's favorite reccomendations just press "Start</p>
  <Link className ="btn btn-primary btn-lg" to="/login" role="button">Start</Link>
</span>
</div>

        )
    }

}
export default Jumbotron;