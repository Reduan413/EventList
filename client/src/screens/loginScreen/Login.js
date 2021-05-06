import React, { Component } from 'react';
import loginImg from '../../login.svg';
import "./style.scss";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleLogin } from '../../redux/actions/auth.action'

class LoginPage extends Component {

    render() {
        const { authReducer, handleLogin, location } = this.props

        return (
            <React.Fragment>
                {authReducer.isLoading ? (
                    <div></div>
                ) : authReducer.isAuthenticated ? (
                    <Redirect to="/" />
                ) : (
                    <Login handleLogin={handleLogin} location={location} authReducer={authReducer}/>
                )}
            </React.Fragment>
        )
    }
}


class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: "",
        password: "",
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.handleLogin(this.state)
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
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="username" />
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}placeholder="password" />
                            </div>
							<button type="submit" className="btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authReducer: state.authReducer
})

const mapDispatchToProps = {
    handleLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
