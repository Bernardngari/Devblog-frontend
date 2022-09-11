import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addblogform(){
	const {id} = useParams()
	const navigate = useNavigate()
	const[data, setData] = useState({blogger_id: id})
	let url = "http://localhost:9292/blogposts"
	let redirect = `/bloggers/${id}`

	function handleChange(e){
		setData({...data, [e.target.name]: e.target.value})
	}

	function handleSubmit(e){
		e.preventDefault()
		fetch(url,{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			navigate(redirect)
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='title' />
			<input 
				type="text"
				name="title"
				required
				onChange={handleChange}
				placeholder="Enter blog subject"
				/>
				<br />
			<label htmlFor='body' />
			<textarea 
				type="text"
				placeholder='Type your blog body here...'
				name="body"
				required
				onChange={handleChange}
			/>
			<label htmlFor='blogger_id' />
			<input 
				name="blogger_id"
				type="text"
				defaultValue={id}
				hidden
				onChange={handleChange}
			/>
			<br />
			<button type="submit">Submit</button>
		</form>
	)
}

export default Addblogform
