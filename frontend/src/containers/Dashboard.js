import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
    state = {
        loading: true,
        accounts: [],
    }

    async componentDidMount() {
        try {
            const res = await axios.get('http://localhost:8000/api/accounts/')

            this.setState({
                loading: false,
                accounts: res.data,
            })
        } catch (err) {
            this.setState({
                loading: false,
                accounts: [],
            })
        }
    }

    render() {
        const { loading, accounts } = this.state

        if (loading)
            return <h1>Loading</h1>

        console.log(accounts)

        return (
            <div>
                {
                    accounts.length > 0 ? accounts.map((account, index) => (
                        <div key={index}>
                            {account.id} - {account.username}
                        </div>
                    )) : ''
                }
            </div>
        )
    }
}

export default Dashboard
