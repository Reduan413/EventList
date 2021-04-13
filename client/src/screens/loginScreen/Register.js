import React, { Component } from 'react';
import loginImg from '../../login.svg';
import "./style.scss";

export default class Register extends Component {
    constructor(props) {
        super(props);
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                             <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="emil" placeholder="email" />
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" />
                            </div>
							<button>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

