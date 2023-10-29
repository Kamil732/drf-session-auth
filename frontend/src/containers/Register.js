import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { register } from '../redux/actions/auth'
import { Redirect } from 'react-router-dom'
import CSRFToken from '../components/CSRFToken'

export class Register extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        register: PropTypes.func.isRequired,
    }

    state = {
        username: '',
        password: '',
        password2: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault()
        const { username, password, password2 } = this.state

        this.props.register(username, password, password2)
    }

    render() {
        if (this.props.isAuthenticated === true)
            return <Redirect to="/dashboard" />

        const { username, password, password2 } = this.state

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
                <label>Confirm Password:</label>
                <input
                    name="password2"
                    placeholder="Confirm password..."
                    value={password2}
                    onChange={this.onChange}
                    required
                />

                <button className="btn btn-success">Register</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
    register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
