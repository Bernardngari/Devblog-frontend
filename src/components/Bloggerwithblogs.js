import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Deleteblog from './Deleteblog'
import Editblog from './Editblog'
import Blogger from './Blogger'
import Addblog from './Addblog'

/*Rendered through App */

function Bloggerwithblogs(){
	const {id} = useParams()
	const[blogger, setBlogger] = useState([])
	const[bloggerData, setBloggerData] = useState({})

	useEffect(() =>{
		let url =  `https://devblog-2.herokuapp.com/bloggers/${id}`
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setBlogger(data.blogposts);
			})
	},[blogger,id])

	function onEditBlog(editedBlog){
		let removecurrentblog = blogger.filter(blog => blog.id=!editedBlog.id) /*Removes the old version of the blog from state */
		let updated = [...removecurrentblog, editedBlog] /* Adds the edited blog to state */
		setBlogger(updated); /**Sets new state with edited blog included */
	}

	function onDelete(deletedBlog){
		let updatedList = blogger.filter((blog)=> blog.id!==deletedBlog.id)
		setBlogger(updatedList)
	}

	useEffect(() =>{
		let url =  `https://devblog-2.herokuapp.com/bloggers/${id}`
		fetch(url)
			.then(res => res.json())
			.then(data => setBloggerData(data))
	},[id])
	let blogs = (
		(blogger.length > 0?(
			blogger.map((blog) =>(
				<div key={blog.id} className="blogcard">
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
			<Addblog id={bloggerData.id}/>
			<hr />
			{blogs}
		</div>
	)
}

export default Bloggerwithblogs
