import React from 'react'
import { Link } from 'react-router-dom'

function Deleteblog({id}){

	return (
		<Link to={`/blogposts/${id}`} >
			<i className="fa-solid fa-trash"></i> Delete
		</Link>
	)
}

export default Deleteblog
