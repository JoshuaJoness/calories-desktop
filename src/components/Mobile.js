import React from 'react'
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import Nav from './Nav'
import axios from 'axios'
import '../styles/mobile.css'

class Mobile extends React.Component {
	state = {
		user:{
			totalInches: 0,
			activityLevel: ''
		},
		height:{
			feet:[1,2,3,4,5,6,7,8],
			inches:[1,2,3,4,5,6,7,8,9,10,11]
		},
		email: {
			email: ''
		}
	}

	changeField (e, field){
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

	collectEmail = (e) => {
		let email = this.state.email
		let userEmail = e.target.value
		email.email = userEmail
		this.setState({email})
	}

	signup = (e) => {
		if (this.state.email.email) {
			e.preventDefault()
			let email = this.state.email
			axios.post(`${process.env.REACT_APP_API}/essay`,
			email).then(res => {
				const { router } = this.props
				router.push('/')
				console.log(res.data);
				alert('Success! Please check your email.')
			}).catch(err => {
				console.log(err);
			})
		} else {
			alert('Please enter your email')
		}

	}

	render(){
		const styles = {
			particles:{
				position: 'absolute',
				height: "100vh",
				top: 0,
				left: 0,
				zIndex: -1
			},
			title: {
					color: '#CE8F70'
			}
		}
		return(
			<div>
			<Nav />
				<div className='containerOne' id='intro'>
					<center className='titleContainer'>
						<h1 className='title' style={styles.title}>
							STRONG(e)r
							<br/><br/>
							<i class="fas fa-dumbbell"></i>
						</h1>
						<a href="#calculator"><button className='button'>Start</button></a>
					</center>

					</div>
					<div className='containerTwo' id='calculator'>
						<center className='containerTwoTitleContainer'>
							<h1 className='containerTitle'>Calculator</h1>
						</center>
						<center className='formContainer'>
							<div></div>
							<form onSubmit={this.submit} className='form' style={styles.form}>
								<TextField
									 id="outlined-basic"
									 className='input'
									 label="Please enter your age"
									 margin="normal"
									 variant="outlined"
									 onInput={(e)=>this.changeField(e, 'age')}
								 /><br/>
								 <TextField
										id="outlined-basic"
										className='input'
										label="Please enter your weight (lbs)"
										margin="normal"
										variant="outlined"
										onInput={(e)=>this.changeField(e, 'weight')}
									/><br/>
									<FormControl>
										<FormHelperText>Please select a gender</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={this.setGender}
										 variant="outlined"
										 className='input'
										>
										 <MenuItem value="male">Male</MenuItem>
										 <MenuItem value="female">Female</MenuItem>
										</Select>
									</FormControl><br/>
									<FormControl>
										<FormHelperText>Feet (')</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={this.convertFeet}
										 variant="outlined"
										 className='input'
										>
										{
											this.state.height.feet.map(foot => <MenuItem value={foot}>{foot}</MenuItem>)
										}
										</Select>
									</FormControl><br/>
									<FormControl>
										<FormHelperText>Inches (")</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={this.setInches}
										 variant="outlined"
										 className='input'
										>
										{
											this.state.height.inches.map(inch => <MenuItem value={inch}>{inch}</MenuItem>)
										}
										</Select>
									</FormControl><br/>
									<FormControl>
										<FormHelperText>Please select an activity level</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={(e)=>this.change(e, 'activityLevel')}
										 variant="outlined"
										 className='input'
										>
											<MenuItem value="low">Not Very Active (little to no exercise)</MenuItem>
											<MenuItem value="mid">Moderately Active (light exercise 1-3 times/week)</MenuItem>
											<MenuItem value="high">Very Active (moderate exercise 3-5 times/week)</MenuItem>
										</Select>
									</FormControl><br/>
									<button className='button'>Submit</button>
								</form>
								<div></div>
							</center>
					</div>
					<div className='containerThree'>
						<div></div>
						<center>
						<h1 className='containerTitle'>My Story</h1>
						<div
							className="video"
							style={{
								position: "relative",
								paddingBottom: "56.25%" /* 16:9 */,
								paddingTop: 25,
								height: 0
							}}
						>
							<iframe
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%"
								}}
								src='https://www.youtube.com/embed/cJG2Wap5GYM'
								frameBorder="0"
							/>
						</div><br/>

						<a href="https://www.youtube.com/watch?v=cJG2Wap5GYM" target="blank">Watch on YouTube</a>

						<form onSubmit={this.signup} className='mailingListForm'>
						<h1>Want to learn more about calorie counting?</h1><br/><br/>
						<h1 className='description'>Sign up to my newsletter below to recieve your<br/> free copy of <i>Eat Anything, Lose Weight</i>.</h1>

						<br/><br/>
						<h1>
							Enter your email below to get started:

						</h1>
						<TextField
				           id="filled-full-width"
									 type= 'email'
				           label="Email"

				           placeholder="email@gmail.com"
				           helperText="Please enter your email"

				           margin="normal"
				           InputLabelProps={{
				             shrink: true,
				           }}
				           variant="filled"
									 onInput={this.collectEmail}
				         /><br />
						<button className='mailingListButton'>Submit</button>
						</form>
						</center>
						<div></div>
					</div>
			</div>
		)
	}
}

export default Mobile
