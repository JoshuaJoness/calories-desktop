import React from 'react'
import Nav from './Nav'
import '../styles/results.css'

class Results extends React.Component {

	state= {gain:0}

	componentWillMount () {
		let maintain = this.props.location.maintain
		this.setState({gain:(+this.props.location.maintain + +500).toFixed(0)})
	}
	componentDidMount() {
		window.scrollTo(0, 0);
}
	render(){
		const styles ={
			link: {
				display: 'inline-block'
			}
		}
		return(
			<>
				<div>
					<Nav />
						<div className='firstContainer'>

							<div className='calorieCount'>
								<center>
									<h1><i class="fas fa-utensils"></i></h1>
									<h1 className='calorieTitle'>{Number(this.props.location.maintain).toFixed(0)} calories</h1>
									<h2 className='calorieDescription'>This is roughly the amount of calories that your body uses per day just to keep you alive</h2>
								</center>
							</div>

							<div className='calorieCount' id='resultsContainerTwo'>
								<center>
									<h1><i class="fas fa-weight"></i></h1>
									<h1 className='calorieTitle'>{Number(this.props.location.maintain).toFixed(0) - 500} calories</h1>
									<h2 className='calorieDescription'>If you want to <b><u>lose weight</u></b> you need to use more calories than you consume. We achieve this by subtracting 500 calories from our original result to get: {Number(this.props.location.maintain).toFixed(0) - 500} calories</h2>
								</center>
							</div>

							<div className='calorieCount' id='resultsContainerThree'>
								<center>
									<h1><i class="fas fa-dumbbell" ></i></h1>
									<h1 className='calorieTitle'>{this.state.gain} calories</h1>
									<h2 className='calorieDescription'>If you want to <b><u>build muscle</u></b> you have to consume more calories than you use. We achieve this by adding 500 calories to our original result to get: {this.state.gain} calories</h2>
								</center>
							</div>

							<div className='disclaimerContainer'>
								<div></div>
									<p><b>Disclaimer: </b>Please remember that these are just <b>estimations</b>. Any sudden or drastic change in caloric intake is not recommend. Please be safe and be smart. And before making any drastic changes to your diet, please consult a health professional.</p>
								<div></div>
							</div>

						</div>
				</div>
			</>
		)
	}
}

export default Results
