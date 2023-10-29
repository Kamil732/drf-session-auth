import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { login } from '../redux/actions/auth'
import { Redirect } from 'react-router-dom'
import CSRFToken from '../components/CSRFToken'

class Login extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        login: PropTypes.func.isRequired,
    }

    state = {
        username: '',
        password: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state

        this.props.login(username, password)
    }

    render() {
        if (this.props.isAuthenticated === true)
            return <Redirect to="/dashboard" />

        const { username, password } = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <CSRFToken />

                <label>Username:</label>
                <input
                    name="username"
                    placeholder="Username..."
                    value={username}
                    onChange={this.onChange}
                    required
                />
                <label>password:</label>
                <input
                    name="password"
                    placeholder="Password..."
                    value={password}
                    onChange={this.onChange}
                    required
                />

                <button className="btn btn-success">Login</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
