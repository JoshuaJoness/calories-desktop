import React from 'react';
import Nav from './Nav'
import axios from 'axios'
import '../styles/home.css'
import Button from '@material-ui/core/Button';

class Home extends React.Component {

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


	render() {
		const styles = {
			container:{
				backgroundColor:'#FFF6B6',
				color: '#303030',
				textAlign: 'center',
				fontFamily: "Yeon Sung, cursive",
				height: '80vh'
			},
			intro: {
				display: 'grid',
				gridTemplateColumns: '50% 50%',
				fontFamily: "Yeon Sung, cursive",
				color: '#D8CD77',
				textAlign: 'center',
			},
			name: {
				fontFamily: "Yeon Sung, cursive",
				fontSize: '100px',
				fontWeight: 'bold',
				color: '#303030',
				textAlign: 'center'
			},
			whatWeOffer:{
				backgroundColor:'#303030',
				color:'#1E304F',
				fontFamily: "Yeon Sung, cursive",
				fontSize: '80px',
				fontWeight: 'bold',
				backgroundImage:'url("./dumbells.jpeg")'
			},
			pushup:{
				width: '500px'
			},
			test:{
				color:'#1E304F',
				fontFamily: "Yeon Sung, cursive"
			},
			sqaut: {
				width: '70%',
				marginTop: '5%'
			},
			motto:{
				marginTop: '20%'
			},
			button: {
				border:'0px solid #846075',
				fontSize:'1.75em',
				padding:'.25em .5em .3125em',
				color:'#FFF6B6',
				borderRadius:'.25em',
				background:'#303030',
				cursor: 'pointer',
				margin: '5%'
			},
			content: {
				fontFamily: "'Roboto', sans-serif",
				fontSize: '70px'
			}
		}
  return (
		<>
		<Nav></Nav>
		<div className='firstContainer'>
			<video src='./training.mp4' autoplay="" loop="loop" muted="muted"></video>
			<div className='content'>
				<h1 style={styles.content}>CALORIE <i class="fas fa-dumbbell"></i><br/>COUNTER.tech </h1>
			</div>
		</div>
		<div className='secondContainer'>
			<center>

			<h1>Want to lose weight or build muslce?</h1>


			<form onSubmit={this.submit} className='form'>
					<h2>Fill in the form below and we'll help you get started:</h2>
						<input type='text' className='input' onInput={(e)=>this.changeField(e, 'age')} placeholder="Please enter your age"></input>
						<input type='text' className='input' onInput={(e)=>this.changeField(e, 'weight')} placeholder="Please enter your weight"></input>
						<select className='select' onChange={this.setGender}>
							<option disabled selected value> Please select a gender </option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
							<center> <h1>Please enter your height: </h1> </center>
							<div className='height'>
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

			</center>
		</div>


		</>
  );
}}

export default Home
