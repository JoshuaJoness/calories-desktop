import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
	const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
		return (
			<nav className="nav">
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					<i class="fas fa-bars"></i>
				</Button>
				<Menu
	        id="simple-menu"
	        anchorEl={anchorEl}
	        keepMounted
	        open={Boolean(anchorEl)}
	        onClose={handleClose}
	      >
	        <MenuItem onClick={handleClose}>About</MenuItem>
	        <MenuItem onClick={handleClose}>Services</MenuItem>
	        <MenuItem onClick={handleClose}>Contact</MenuItem>
	      </Menu>
				<div></div>
				<a href="#intro"><i class="fas fa-dumbbell"></i></a>
			</nav>
		)
}
