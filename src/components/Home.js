import React from 'react';
import Nav from './Nav'
import axios from 'axios'
import '../styles/home.css'

class Home extends React.Component {
	state = {
		user:{
			totalInches: 0,
			activityLevel: ''
		},
		height:{
			feet:[1,2,3,4,5,6,7,8],
			inches:[1,2,3,4,5,6,7,8,9,11]
		}
	}

	changeField (e, field){
		console.log('hello');
		let user = this.state.user
		user[field] = Number(e.target.value)
		this.setState({user})
		console.log(this.state.user);
	}

	convertFeet = (e) => {
		let user = this.state.user
		user.totalInches = Number(e.target.value * 12)
		this.setState({user})
		console.log(this.state.user);
	}

	setInches = (e) => {
		if (this.state.user.totalInches === 0) {
			alert("Please enter 'feet' first, if you make a mistake, refresh the page")
		} else {
		let user = this.state.user
		user.totalInches = user.totalInches + Number(e.target.value)
		this.setState({user})
		console.log(this.state.user);
		}
	}

	setGender = (e) => {
		console.log(e.target.value);
		let user = this.state.user
		if (e.target.value === 'male') {
			user.gender = 'male'
			this.setState({user})
			console.log(this.state.user.gender);
		} else {
			user.gender = 'female'
			this.setState({user})
			console.log(this.state.user.gender);
		}
	}

	change = (e) => {
		console.log(e.target.value);
		let user = this.state.user
		if (e.target.value === 'low') {
			user.activityLevel = 'low'
			this.setState({user})
		} else if (e.target.value === 'mid') {
			user.activityLevel = 'mid'
			this.setState({user})
		} else {
			user.activityLevel = 'high'
			this.setState({user})
		}
		console.log(this.state.user);
	}

	submit = (e) => {
		e.preventDefault()
		let user = this.state.user
		axios.post('http://localhost:4000/calories',
		this.state.user
	).then(res => {
		console.log('res.data',res.data);
		let maintain = this.state.maintain
		maintain = res.data.maintain
		this.setState({maintain})
		console.log('this.state.maintain', this.state.maintain);
		this.props.history.push({
			pathname: '/results',
			maintain: this.state.maintain})
	}).catch(err => {
		console.log(err);
	})
	}

	test = (e) => {
		console.log('hello');
	}

	render() {
		const styles = {
			background: {
				backgroundImage: "url('./logo.svg')",
				backgroundRepare: 'none'
			},
			form: {
				backgroundColor: '#D9B08C',
				color: '#2C3531',
				textAlign: 'center',
				paddingTop: '10%',
				paddingBottom: '10%',
				opacity: '1 !important'
			},
			container: {
				display: 'grid',
				gridTemplateColumns: '33% 33% 33%'
			},
			title: {
				padding: '5%'
			}
		}
  return (
    <div style={styles.background} className='background'>
			<Nav></Nav>
			<h1 className="title">Welcome to calorie calculator</h1>

			<div style={styles.container}>

				<div></div>

				<form onSubmit={this.submit} style={styles.form}>

						<div style={styles.title} >Please select a gender:</div>
								<select onChange={this.setGender}>
									<option disabled selected value> -- select an option -- </option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>

						<div style={styles.title}>Please enter your age:</div>
							<input type='text' onInput={(e)=>this.changeField(e, 'age')} placeholder="Your age here" ></input>

				  	<div style={styles.title}>Please enter your height:</div>
							<div>
								<span>Feet</span>
								<select onChange={this.convertFeet}>
									{
										this.state.height.feet.map(foot => <option value={foot}>{foot}</option>)
									}
								</select>
								<span>Inches</span>
								<select onChange={this.setInches}>
									{
										this.state.height.inches.map(inch => <option value={inch}>{inch}</option>)
									}
								</select>
							</div>

				<div style={styles.title}>Please enter your weight:</div>
					<input type='text' onInput={(e)=>this.changeField(e, 'weight')} placeholder="135lbs"></input>

					<div style={styles.title}>Lastly...how active do you consider yourself?</div>
				    <span>Activity Level</span>
				    <select onChange={(e)=>this.change(e, 'activityLevel')}>
							<option disabled selected value> -- select an option -- </option>
				     <option value="low">Not Active</option>
				     <option value="mid">Moderately Active</option>
				     <option value="high">Highly Active</option>
				   </select>
				<button >Submit</button>
			</form>
			<div></div>
		</div>
  </div>
  );
}}

export default Home;
