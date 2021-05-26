import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LOGOUT } from '../redux/actionType'

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token");
        this.props.logout()
    }

    render() {
        return <Redirect to='/' />
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () =>
            dispatch({ 
                type: LOGOUT
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
