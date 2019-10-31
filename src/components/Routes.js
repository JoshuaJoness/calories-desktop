import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Results from './Results'
import Home from './Home'
import Info from './Info'

class Routes extends React.Component {
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/results' component={Results}></Route>
					<Route path='/info' component={Info}></Route>
					<Route path='/' component={Home}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
