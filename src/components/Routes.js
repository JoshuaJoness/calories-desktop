import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CalorieForm from './CalorieForm'
import Results from './Results'
import Upload from './Upload'
import Purchase from './Purchase'
import Mobile from './Mobile'
import Hooks from './Hooks'
import Home from './Home'
import Info from './Info'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/results' component={Results}></Route>
					<Route path='/hooks' component={Hooks}></Route>
					<Route path='/' component={Mobile}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
