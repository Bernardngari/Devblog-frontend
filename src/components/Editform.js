import React from 'react'
import { useState } from 'react'

function Editform({blog,onEditBlog,isEditing,setisEditing}){

		const[blogdata, setBlogData] = useState(blog)

		function handleChange(e){
			setBlogData({...blogdata, [e.target.name]: e.target.value})
		}

	function handleSubmit(e){
		e.preventDefault()
		fetch(`https://devblog-2.herokuapp.com/blogposts/${blog.id}`,{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(blogdata)
		})
			.then(r => r.json())
			.then(editedBlog => onEditBlog(editedBlog))
			setisEditing(()=> !isEditing)

			setBlogData({})
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title"><strong>Change Blog title</strong></label>
			<br />
			<input type="text" 
				defaultValue={blogdata.title}
				name="title"
				onChange={handleChange}
				 />
			<br />
			<label htmlFor='body'><strong>Change Blog content</strong></label>
			<br />
			<textarea 
				type="text" 
				rows="10"
				columns="100"
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
