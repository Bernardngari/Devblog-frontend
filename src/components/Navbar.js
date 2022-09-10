import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
	return (
		<nav>
			<Link to="/"className='logo'>DEVBLOG</Link>
			<div className='navwrap'>
				<Link to='/'>
				<i className="fa-sharp fa-solid fa-house"></i>Home
			</Link>
			<Link to='/addbloggers'>
				<i className="fa-solid fa-address-card"></i>Register
			</Link>
			</div>
			

			
			
		</nav>
	)
}

export default Navbar
