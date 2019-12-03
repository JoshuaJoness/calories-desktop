import React, { useState } from 'react'
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText'
import axios from 'axios'
import '../styles/mobile.css'

const Hooks = props => {
	const [state, setState] = useState({
			user:{
				totalInches: 0,
				activityLevel: ''
			},
			height:{
				feet:[1,2,3,4,5,6,7,8],
				inches:[1,2,3,4,5,6,7,8,9,10,11]
			}
		})


	const changeField = (e, field) => {
		console.log('hello');
		let user = state.user
		user[field] = Number(e.target.value)
		setState({...state, user})
		console.log(state.user);
	}

	const convertFeet = (e) => {
		let user = state.user
		user.totalInches = Number(e.target.value * 12)
		setState({...state, user})
		console.log(state.user);
	}

	const setInches = (e) => {
		if (state.user.totalInches === 0) {
			alert("Please enter 'feet' first, if you make a mistake, refresh the page")
		} else {
		let user = state.user
		user.totalInches = user.totalInches + Number(e.target.value)
		setState({...state, user})
		console.log(state.user);
		}
	}

	const setGender = (e) => {
		console.log(e.target.value);
		let user = state.user
		if (e.target.value === 'male') {
			user.gender = 'male'
			setState({...state, user})
			console.log(state.user.gender);
		} else {
			user.gender = 'female'
			setState({...state, user})
			console.log(state.user.gender);
		}
	}

	const change = (e) => {
		console.log(e.target.value);
		let user = state.user
		if (e.target.value === 'low') {
			user.activityLevel = 'low'
			setState({...state, user})
		} else if (e.target.value === 'mid') {
			user.activityLevel = 'mid'
			setState({...state, user})
		} else {
			user.activityLevel = 'high'
			setState({...state, user})
		}
		console.log(state.user);
	}

	const submit = (e) => {
		e.preventDefault()
		let user = state.user
		axios.post(`${process.env.REACT_APP_API}/calories`,
		state.user
	).then(res => {
		console.log('res.data',res.data);
		let maintain = state.maintain
		maintain = res.data.maintain
		setState({...state, maintain})
		console.log('state.maintain', state.maintain);
		this.props.history.push({
			pathname: '/results',
			maintain: state.maintain})
	}).catch(err => {
		console.log(err);
	})
	}

	const styles = {
		particles:{
			position: 'absolute',
			height: "100vh",
			top: 0,
			left: 0
		},
	}
		return(
			<div>
				<div className='containerOne'>
					<center className='titleContainer'>
						<h1 className='title'>
							caloriecounter.tech
							<br/><br/>
							<i class="fas fa-utensils"></i>   <i class="fas fa-weight"></i>   <i class="fas fa-dumbbell"></i>
						</h1>
						<a href="#calculator"><button className='button' href="#calculator">Get Started</button></a>
					</center>
					<Particles style={styles.particles}
							params={{
								"particles": {
										"number": {
												"value": 50
										},
										"size": {
												"value": 3
										}
								},
								"interactivity": {
										"events": {
												"onhover": {
														"enable": true,
														"mode": "repulse"
												}
										}
								}
						}} />
					</div>
					<div className='containerTwo' id='calculator'>
						<center className='containerTwoTitleContainer'>
							<h1 className='containerTwoTitle'>Calculator</h1>
						</center>
						<center className='formContainer'>
							<div></div>
							<form onSubmit={submit} className='form' style={styles.form}>
								<TextField
									 id="outlined-basic"
									 className='input'
									 label="Please enter your age"
									 margin="normal"
									 variant="outlined"
									 onInput={(e)=>changeField(e, 'age')}
								 /><br/>
								 <TextField
										id="outlined-basic"
										className='input'
										label="Please enter your weight (lbs)"
										margin="normal"
										variant="outlined"
										onInput={(e)=>changeField(e, 'weight')}
									/><br/>
									<FormControl>
										<FormHelperText>Please select a gender</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={setGender}
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
										 onChange={convertFeet}
										 variant="outlined"
										 className='input'
										>
										{
											state.height.feet.map(foot => <MenuItem value={foot}>{foot}</MenuItem>)
										}
										</Select>
									</FormControl><br/>
									<FormControl>
										<FormHelperText>Inches (")</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={setInches}
										 variant="outlined"
										 className='input'
										>
										{
											state.height.inches.map(inch => <MenuItem value={inch}>{inch}</MenuItem>)
										}
										</Select>
									</FormControl><br/>
									<FormControl>
										<FormHelperText>Please select an activity level</FormHelperText>
										<Select
										 labelId="demo-simple-select-outlined-label"
										 id="demo-simple-select-outlined"
										 onChange={(e)=>change(e, 'activityLevel')}
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
			</div>
		)
	}


export default Hooks
