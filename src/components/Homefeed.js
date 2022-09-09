import React from 'react'

/*data received as props from HOME*/

function Homefeed({blogs}) {
	let blogcontent = blogs.map((blog)=> (
				<div key ={blog.id} className="bloggercard">
						<div className='avatar'>
							<img src={blog.image} alt={blog.name} />
						</div>
						<p>{blog.name}</p>
				</div>
		))
	return (
			<>
				{blogcontent}
			</>
			
	)
}

export default Homefeed
