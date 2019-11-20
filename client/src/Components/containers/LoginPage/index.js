import React, {Component} from 'react';
import LoginForm from '../../LoginForm';

class Login extends Component 
{
    render()
    {
        return <LoginForm onLogin={this.props.onLogin}/>
    }
}


export default Login; 








