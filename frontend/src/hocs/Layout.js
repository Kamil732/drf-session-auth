import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'

export class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    {this.props.children}
                </Switch>
            </>
        )
    }
}

export default Layout
