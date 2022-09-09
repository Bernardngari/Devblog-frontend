import React from 'react'
import { Link } from 'react-router-dom'
/*Rendered through Bloggerwithblogs*/
function Blogger({blogger}){
	return (
		<div className='blogger'>
				<Link to="/">
						<i className="fa-solid fa-arrow-left"></i> <i className="fa-sharp fa-solid fa-house"></i>
				</Link>
				<div className='bloggerpostscard'>
					{<img src={blogger.image} alt={blogger.name} className='bloggerAvi' />}
					{blogger.name}
				</div>
		</div>
	)
}

export default Blogger
