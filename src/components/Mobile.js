import React from 'react'
import '../styles/mobile.css'
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';

class Mobile extends React.Component {
	render(){
		const styles = {
			particles:{
				position: 'absolute',
				height: "100vh",
				top: 0,
				left: 0
			},
		}
		return(
			<div className='mainWrapperInner'>
			<div className='containerOne'>
				<center className='titleContainer'>
					<h1 className='title'>
						caloriecounter.tech
						<br/><br/>
						<i class="fas fa-weight"></i>  <i class="fas fa-dumbbell"></i>  <i class="fas fa-hamburger"></i>
					</h1>
					<button className='button'>Get Started</button>
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
			</div>
		)
	}
}

export default Mobile
