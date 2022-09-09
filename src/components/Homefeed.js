import React from 'react'
import Viewblog from './Viewblog';

/*data received as props from Home/ rendered through Home*/
/*Creates blogger cards on Home page*/

function Homefeed({blogs}) {
	let blogcontent = blogs.map((blog)=> (
				<div key ={blog.id} className="bloggercard">
						<div className='avatar'>
							<img src={blog.image} alt={blog.name} />
						</div>
						<p><strong>Name:</strong> {blog.name}</p>
						<p><strong>Number of blogs:</strong> {blog.blogposts.length}</p>
						<p><Viewblog  id={blog.id}/></p>
				</div>
		))
	return (
			<>
				{blogcontent}
			</>
			
	)
}

export default Homefeed
