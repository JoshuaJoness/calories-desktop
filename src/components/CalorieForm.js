import React from 'react';
import Nav from './Nav'
import axios from 'axios'
import '../styles/home.css'

class CalorieForm extends React.Component {
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
		axios.post(`${process.env.REACT_APP_API}/calories`,
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
				backgroundRepeat: 'none'
			},
			form: {
				borderRadius: '25px',
				fontWeight: "bold",
				backgroundColor: '#303030',
				color: '#FFF6B6',
				textAlign: 'center',
				paddingTop: '10%',
				paddingBottom: '10%',
				opacity: '1 !important',
				border: '1px solid #303030'
			},
			container: {
				display: 'grid',
				gridTemplateColumns: '33% 33% 33%',
				marginTop: '10%',
				marginBottom: '20%'
			},
			title: {
				padding: '5%',
				textAlign: 'center'
			},
			topContainer: {
				display: 'grid',
				gridTemplateRows: '40% 60%'
			},
			image: {
				width: '800px',
				marginLeft: '25%',
				marginTop: '5%'
			},
			intro: {
				marginLeft: '30%',
				marginTop: '10%'
			},
			top:{
				display:'grid',
				gridTemplateColumns:'50% 50%'
			}
		}
  return (
    <div  className='background'>

			<Nav></Nav>
			<div style={styles.top}>
				<div style={styles.intro}>
					<h1>Welcome to our calorie calculator! Simply fill in the form below and we'll tell you how much calories you should consume to hit your goals!</h1>
				</div>
				<img style={styles.image} src='./workingout.svg'></img>
			</div>
			<div style={styles.container}>
				<div></div>
				<form style={styles.background} onSubmit={this.submit} style={styles.form}>
						<h2 style={styles.title} >Just fill in this form:</h2>
							<input type='text' className='input' onInput={(e)=>this.changeField(e, 'age')} placeholder="Please enter your age" ></input>
							<input type='text' className='input' onInput={(e)=>this.changeField(e, 'weight')} placeholder="Please enter your weight"></input>
							<select className='select' onChange={this.setGender}>
								<option disabled selected value> Please select a gender </option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
							<div className='height'>
								<span>Height: </span>
								<select className='select' onChange={this.convertFeet}>
									<option disabled selected value>Feet(')</option>
										{
											this.state.height.feet.map(foot => <option value={foot}>{foot}</option>)
										}
								</select>
								<select className='select' onChange={this.setInches}>
									<option disabled selected value>Inches(")</option>
										{
											this.state.height.inches.map(inch => <option value={inch}>{inch}</option>)
										}
								</select>
							</div>
				    <select className='select' onChange={(e)=>this.change(e, 'activityLevel')}>
						<option disabled selected value>Please select an activity level</option>
				     <option value="low">Not Very Active (little to no exercise)</option>
				     <option value="mid">Moderately Active (light exercise 1-3 times/week)</option>
				     <option value="high">Very Active (moderate exercise 3-5 times/week)</option>
				   </select>
					 <div>
						<button className='button'>Submit</button>
					</div>
			</form>
			<div></div>
		</div>
  </div>
  );
}}

export default CalorieForm;
