import React from 'react'

class Results extends React.Component {
	state = {

	}
	componentWillMount () {
		let maintain = this.props.location.maintain
	}
	render(){
		return(
			<>
				<div>{Number(this.props.location.maintain).toFixed(0)}</div>
			</>
		)
	}
}

export default Results
