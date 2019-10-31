import React from 'react'
import Nav from './Nav'

class Results extends React.Component {
	state = {}
	componentWillMount () {
		let maintain = this.props.location.maintain}
	render(){
		const styles ={
			link: {
				display: 'inline-block'
			}
		}
		return(
			<>
			<Nav/>
				<h2>The amount calories that your body needs to maintain its current weight is:</h2>
				<h1>{Number(this.props.location.maintain).toFixed(0)} calories</h1>
				<h2>If you want to lose weight you need to consume:</h2>
				<h1>{Number(this.props.location.maintain).toFixed(0) - 500} calories</h1>
				<div style={styles.link}>
					<h2>For more infomation click</h2>
					<a href='/info'>here</a>
				</div>
			</>
		)
	}
}

export default Results
