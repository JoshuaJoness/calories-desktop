import React from 'react'
import { Button } from 'antd';
import '../styles/nav.css'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

	render () {
		const styles = {
			nav: {

				height: '50px',
				position: 'fixed'
			},
			logo: {
				marginTop: '2%',
				marginLeft: '2%',
				fontSize: '30px',
				color: '#FFFFFF',
				textDecoration: 'none',
				fontFamily: "Yeon Sung, cursive",
				textAlign: 'center'
			}
		}
		return (
			<nav style={styles.nav}>
				<a href="/index" ></a>

					<Link to='/' className='navItem' style={styles.logo}><i class="fas fa-dumbbell"></i></Link>
					<Link to='/' className='navItem' style={styles.logo}>About</Link>
					<Link to='/' className='navItem' style={styles.logo}>Services</Link>
					<Link to='/' className='navItem' style={styles.logo}>Products</Link>
					<Link to='/' className='navItem' style={styles.logo}>Trainers</Link>
			</nav>
		)
	}
}

export default Nav
