import React from 'react'
import { Button } from 'antd';
import '../styles/nav.css'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

	render () {
		const styles = {
			nav: {
				backgroundColor: '#D9B08C',
				height: '50px'
			},
			logo: {
				fontWeight: 'bold',
				paddingTop: '0.7%',
				paddingLeft: '2.5%',
				fontSize: '20px',
				color: '#116466',
				textDecoration: 'none'
			}
		}
		return (
			<nav style={styles.nav}>
				<a href="/index" ></a>
				<div className='navContainer'>
						<Link to='/' style={styles.logo}>Calorie Calculator</Link>
						<i style={styles.logo} class="fab fa-twitter"></i>
				</div>
			</nav>
		)
	}
}

export default Nav
