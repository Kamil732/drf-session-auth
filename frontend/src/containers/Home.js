import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="mt-5 p-5 bg-light">
                    <h1 className="display-4">Welcome to Session Auth</h1>
                    <p className="lead">
                        here is some jumbotron
                    </p>
                    <hr className="my-4" />
                    <p>Click the button below to log in</p>
                    <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
                </div>
            </div>
        )
    }
}

export default Home
