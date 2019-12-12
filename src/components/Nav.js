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
				<div></div>
				<div></div>
				<Link to="/"><i class="fas fa-dumbbell"></i></Link>
			</nav>
		)
}
