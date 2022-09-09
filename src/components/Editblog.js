import React from 'react'
import { Link } from 'react-router-dom'

function Editblog({id,blog}){
	return (
		<Link to={`/${id}`} >
			<i class="fa-regular fa-pen-to-square"></i> Edit
		</Link>
	)
}

export default Editblog
