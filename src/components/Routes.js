import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CalorieForm from './CalorieForm'
import Results from './Results'
import Upload from './Upload'
import Purchase from './Purchase'
import Home from './Home'
import Info from './Info'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/results' component={Results}></Route>
					<Route path='/purchase' component={Purchase}></Route>
					<Route path='/upload' component={Upload}></Route>
					<Route path='/form' component={CalorieForm}></Route>
					<Route path='/info' component={Info}></Route>
					<Route path='/' component={Home}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
