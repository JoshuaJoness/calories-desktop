import React from 'react'
import Nav from './Nav'
import '../styles/results.css'
class Results extends React.Component {

	state= {gain:0}

	componentWillMount () {
		let maintain = this.props.location.maintain
		this.setState({gain:(+this.props.location.maintain + +500).toFixed(0)})
	}
	render(){
		const styles ={
			link: {
				display: 'inline-block'
			}
		}
		return(
			<>
				<Nav></Nav>
				<center>
					<center className='resultsContainer'>
						<i class="fas fa-utensils"></i>
						<h1>{Number(this.props.location.maintain).toFixed(0)} calories</h1>
						<h2>This is the amount of calories that your body uses per day just to keep you alive:</h2>
						<br/>
						<i class="fas fa-dumbbell"></i>
						<h1>{Number(this.props.location.maintain).toFixed(0) - 500} calories</h1>
						<h2>If you want to <b><u>lose weight</u></b> you need to use more calories than you consume. In order to do this we subtract 500 calories from the number above to get:</h2>
						<i class="fas fa-hamburger"></i>
						<h1>{this.state.gain} calories</h1>
						<h2>If you want to <b><u>build muscle</u></b> you have to consume more calories than you use. In order to do this we add 500 calories to the number above:</h2>
						<br/><br/><br/><br/><br/>
						<p><b>Disclaimer: </b>Please note that these are guidelines only. This is not medical advice. Please consult with your healthcare provider before undergoing any dietary changes.</p>
						<div style={styles.link}>
						</div>
					</center>
					<center className='resultsSecondContainer'>
						<img src='./progress8.jpg' className='resultsImages'></img>
						<p>Losing weight can be hard. For years I struggled with my weight. I tried vegan diets, carnivore diets, no-carb diets, slow-carb diets, and of course, my favorite, the KETOGENIC diet!<br/><br/>
						Little did I know that losing weight is easy and that you can do it while eating whatever you want! You don't have to give up your favorite foods! Carbs are NOT the enemy. And yes, you can even have a drink or 2 every night.<br/><br/>
						If you'd like to learn how I did it, then grab a copy of my e-book below. It's <b>short, concise, informative, and to the point</b>. Plus, for a limited time it's only a dollar.
						<br/><br/>
						In it you'll learn:
						<ul>
							<li>What causes weight loss!</li>
							<li>Why you can eat whatever you want and still lose weight!</li>
							<li>And how you can immediately begin cutting calories from your diet right now!</li>
							<li>PROGRAMS AND DIET PLANS AVAILABLE UPON REQUEST</li>
						</ul>
						</p>
						<button>Purchase Now</button>
					</center>
				</center>
			</>
		)
	}
}

export default Results
