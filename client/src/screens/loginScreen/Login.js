import React, { Component } from 'react';
import loginImg from '../../login.svg';
import "./style.scss";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="content">
                    <h1 className="header__text">Login</h1>
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <div className="form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" />
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" />
                            </div>
							<button className="btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

