import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Deleteblog from './Deleteblog'
import Editblog from './Editblog'
import Blogger from './Blogger'

/*Rendered through App */

function Bloggerwithblogs(){
	const {id} = useParams()
	const[blogger, setBlogger] = useState([])
	const[bloggerData, setBloggerData] = useState({})

	useEffect(() =>{
		let url =  `http://localhost:9292/bloggers/${id}`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setBlogger(data.blogposts);
			})
	},[blogger])

	function onEditBlog(editedBlog){
		let updatedList = {...blogger, editedBlog}
		setBlogger(updatedList);
	}

	function onDelete(deletedBlog){
		let updatedList = blogger.filter((blog)=> blog.id== !deletedBlog.id)
		setBlogger(updatedList)
	}



	useEffect(() =>{
		let url =  `http://localhost:9292/bloggers/${id}`
		fetch(url)
			.then(res => res.json())
			.then(data => setBloggerData(data))
	},[])
	let blogs = (
		(blogger.length > 0?(
			blogger.map((blog) =>(
				<div key={blog.id}>
					<h3>{blog.title}</h3>
					<p>{blog.body}</p>
				<span>
					<Deleteblog id={blog.id} onDelete={onDelete}/>
					<Editblog blog={blog} onEditBlog={onEditBlog} />
					</span>
				</div>
			))
		):
		(
			<>
				<h2>Sorry, user has not blogged yet!</h2>
				<Link to="/">
					<i className="fa-solid fa-arrow-left"></i> Go Back Home
				</Link>
			</>
		)
		)
	)
	return (
		<div>
			<Blogger blogger={bloggerData}/>
			<hr />
			{blogs}
		</div>
	)
}

export default Bloggerwithblogs