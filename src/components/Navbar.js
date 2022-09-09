import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
	return (
		<nav>
			<Link to="/"className='logo'>DEVBLOG</Link>
			<Link to='/'>
				<i className="fa-sharp fa-solid fa-house"></i>Home
			</Link>
			<Link to='/addbloggers'>
				<i class="fa-solid fa-address-card"></i>Register
			</Link>

			
			
		</nav>
	)
}

export default Navbar
