import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { logout } from '../redux/actions/auth'

class Navbar extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        logout: PropTypes.func.isRequired,
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                                {
                                    this.props.isAuthenticated ? (
                                        <NavLink className="nav-link" exact to="/" onClick={this.props.logout}>Logout</NavLink>
                                    ) : (
                                        <>
                                            <NavLink className="nav-link" exact to="/login">Login</NavLink>
                                            <NavLink className="nav-link" exact to="/register">Register</NavLink>
                                        </>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
