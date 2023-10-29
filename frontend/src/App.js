import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './hocs/Layout'

import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

import { Provider } from 'react-redux'
import store from './redux/store'
import { checkAuthenticated } from './redux/actions/auth'

class App extends Component {
	componentDidMount() {
		store.dispatch(checkAuthenticated())
	}

  	render() {
		return (
			<Provider store={store}>
				<Router>
					<Layout>
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/dashboard" component={Dashboard} />
					</Layout>
				</Router>
			</Provider>
		)
   }
}

export default App;
