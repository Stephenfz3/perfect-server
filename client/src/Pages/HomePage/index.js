import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Jumbotron extends Component {
   
    render() {
        return (
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a Virtual Server application. Created to aid in food drinks pairing based on customers preference.</p>
  <span class="my-4">
  <p>To start exploring restaurant's favorite reccomendations just press "Start</p>
  <Link class="btn btn-primary btn-lg" to="/signup" role="button">Start</Link>
</span>
</div>

        )
    }

}
export default Jumbotron;