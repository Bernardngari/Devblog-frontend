import React from 'react'
import { useState } from 'react'

function Editform({blog,onEditBlog}){

		const[blogdata, setBlogData] = useState(blog)

		function handleChange(e){
			setBlogData({...blogdata, [e.target.name]: e.target.value})
		}

	function handleSubmit(e){
		e.preventDefault()
		fetch(`http://localhost:9292/blogposts/${blog.id}`,{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(blogdata)
		})
			.then(r => r.json())
			.then(editedBlog => onEditBlog(editedBlog))
			setBlogData({})
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title" />
			<input type="text" 
				defaultValue={blogdata.title}
				name="title"
				onChange={handleChange}
				 />
			<br />
			<label htmlFor='body' />
			<input type="text" 
				defaultValue={blogdata.body}
				name="body"
				onChange={handleChange}
			/>
			<br />
			<button type="submit">Submit</button>
		</form>
	)
}

export default Editform
