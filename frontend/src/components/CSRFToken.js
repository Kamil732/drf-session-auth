import React, { Component } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

class CSRFToken extends Component {
    state = {
        csrftoken: '',
    }

    async componentDidMount() {
        try {
            await axios.get('http://localhost:8000/api/accounts/csrf_cookie/')

            this.setState({ csrftoken: Cookies.get('csrftoken') })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { csrftoken } = this.state

        return (
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
        )
    }
}


export default CSRFToken
