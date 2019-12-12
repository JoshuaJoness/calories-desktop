import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CalorieForm from './CalorieForm'
import Results from './Results'
import Failure from './Failure'
import Success from './Success'
import Upload from './Upload'
import Purchase from './Purchase'
import Mobile from './Mobile'
import Home from './Home'
import Info from './Info'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/failure' component={Failure}></Route>
					<Route path='/results' component={Results}></Route>
					<Route path='/success' component={Success}></Route>
					<Route path='/' component={Mobile}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
