import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Deleteblog from './Deleteblog'
import Editblog from './Editblog'

/*Rendered through App */

function Bloggerwithblogs(){
	const {id} = useParams()
	const[blogger, setBlogger] = useState([])

	useEffect(() =>{
		let url =  `http://localhost:9292/bloggers/${id}`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setBlogger(data.blogposts);
			})
	},[])

	let blogs = (
		(blogger.length > 0?(
			blogger.map((blog) =>(
				<div key={blog.id}>
					<h2>{blog.topic}</h2>
					<p>{blog.body}</p>
					<span>
					<Link to="/">
							<i className="fa-solid fa-arrow-left"></i> <i className="fa-sharp fa-solid fa-house"></i>
					</Link>
					<Deleteblog id={blog.id} />
					<Editblog id={blog.id} blog={blog} />
					</span>
				</div>
			))
		):
		(
			<>
				<h2>Sorry, user has not blogged yet!</h2>
				<Link to="/">
					Go Back Home
				</Link>
			</>
		
		)
		)
	)
		
	
			
	

	return (
		<div>
			{blogs}
		</div>
	)
}

export default Bloggerwithblogs
