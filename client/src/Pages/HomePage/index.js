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
  <p className="lead">This is a Virtual Server application. Created to aid in food drinks pairing based on customers preference.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
  </div>
  <span className="my-4">
    <br/>
    
  <p>To start exploring restaurant's favorite reccomendations just press "Start</p>
  <Link className ="btn btn-primary " to="/login" role="button">Start</Link>
</span>

</div> 
<div className="about"> <br/>


</div>


</div>


 )
      
    }

}
export default Jumbotron;