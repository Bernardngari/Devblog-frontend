import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

/*Rendered through App */

function Bloggerwithblogs(){
	const {id} = useParams()
	const[blogger, setBlogger] = useState([])
	
	const[bloggerData, setBloggerData] = useState([])

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
					<Link to="/">
						<i className="fa-solid fa-arrow-left"></i> Home
					</Link>
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
