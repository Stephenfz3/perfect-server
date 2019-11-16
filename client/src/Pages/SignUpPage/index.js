import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render(){
        return (
            <div>
            <h1>Sign Up B*tch</h1>
            <Link class="btn btn-primary btn-lg" to="/" role="button">Register Finished</Link>
            </div>
        )
    }
}

export default SignUp;