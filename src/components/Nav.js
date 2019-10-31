import React from 'react'
import { Button } from 'antd';

class Nav extends React.Component {

	render () {
		const styles = {
			nav: {
				backgroundColor: '#D9B08C',
				height: '50px'
			},
			logo: {
				width: '100px',
				height: '100px'
			}
		}
		return (
			<nav style={styles.nav}>
				<a href="/index" ></a>
				<div>
					<a href="/profile" >
						<div></div>
					</a>
				</div>
			</nav>
		)
	}
}

export default Nav
