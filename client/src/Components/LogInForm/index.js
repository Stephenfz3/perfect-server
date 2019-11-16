/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import Api from '../../utils/API';
import {Link} from 'react-router-dom';


class LoginForm extends Component
{
    constructor (props)
    {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    inputChangeHandler=(e)=>this.setState({[e.target.name]:e.target.value});

    login=()=>{
        Api.login(this.state.email,this.state.password).then(session=>{
            this.props.onLogin(session);
        })
    }

    render(){
        return <div className="row">
            <div className="col-6 offset-3">
                <div className="form-group">
                    <input 
                    onChange={this.inputChangeHandler}
                    value={this.state.email}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <input 
                     onChange={this.inputChangeHandler}
                     value={this.state.password}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    />
                </div>

                <Link onClick={this.login} class="btn btn-primary btn-lg" to="/drinkfood" role="button">Login</Link>
            </div>
        </div>
    }



}
export default LoginForm;