import React from 'react'
import { Link} from 'react-router-dom'

/* Rendered as a button/link through Homefeed*/


function Viewblog({id}){
	
	return (
		<>
			<Link className='btn' to={`/bloggers/${id}`}>
				View blogs
			</Link>
		</>
	)
}

export default Viewblog
