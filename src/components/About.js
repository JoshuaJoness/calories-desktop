import React from 'react'
import Nav from './Nav'
import '../styles/about.css'

class About extends React.Component{
	render(){
		return(
			<>
				<Nav/>
				<div className='about-container'>
					<h1>About</h1>
						<p>Calorie Counter is a personal project that I developed to help myself and others quickly get an estimate of our daily caloric needs.</p>
				</div>
				<div className='experience-container'>
					<h1>My Experience</h1><b>Video here</b>
					<p>For years I though that weight loss was tied to the kinds of foods that we ate. I had great success following diets, however, I could not stick to them for extended periods of time.<br/><br/>I was, and still am, astonished by the simplicity of weight loss.<br/><br/>If you want to lose weight, the bottom line is that you have to be in what is called a caloric defectit.<br/><br/>Similarly, if you want to gain weight you have to be in a caloric surplus.<br/><br/>Calorie Counter is a simle way for you to get an <i>estimate</i> of what these numbers are.</p>
				</div>
				<div className='mission-container'>
					<h1>My Mission</h1>
					<p>My mission is to help people realize the transformative power of fitness, health, and wellness. When you are living well, good things unfold from that base of discipline, strength, courage, and constantly pushing you edge.<br/><br/>You are developing amazing habits by sticking to a workout routine, and/or a diet. This discipline, planning, and consistency carries itself over to other areas of your life.<br/><br/>Fitness and health is about more than the body for me, it is about the union of the body, soul, and mind. It is about becoming the highest version of yourself. The deepest version of yourself. The strongest version of yourself. </p>
				</div>
			</>
		)
	}
}

export default About
