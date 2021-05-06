import React, { Component } from 'react';
import loginImg from '../../login.svg';
import "./style.scss";
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Login from './Login'

export default class Register extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: "",
        email: "",
        password: ""
    }
    handleInput = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
            
        })
    }

    regSubmit = (event) =>{
        event.preventDefault()
        axios.post(`http://localhost:3001/user/register/`,
        {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        )
        .then((res) => {
            var message = res.data.message;
            this.props.onReg()
            
    })
    }
    

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="content">
                    <h1 className="header__text">Register</h1>
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <form onSubmit={this.regSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="username" />
                            </div>
                             <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email"  value={this.state.email} onChange={this.handleInput} placeholder="email" />
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password"  value={this.state.password} onChange={this.handleInput} placeholder="password" />
                            </div>
							<button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

