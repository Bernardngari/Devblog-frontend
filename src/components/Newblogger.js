import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Newblogger(){
	const [formData, setFormData] = useState({
		name: "",
		image: "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
	})

	function handleChange(e){
		setFormData({...formData, [e.target.name]: e.target.value})
	}
const navigate = useNavigate()
	function handleSubmit(e){
			e.preventDefault()
		fetch("http://localhost:9292/addbloggers", {
			method:"POST",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify(formData)
		})
		navigate("/")
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name" />
			<input 
				type="text" 
				id="name" 
				placeholder='Enter your name' 
				value={formData.name} 
				onChange={handleChange}
				required
				name="name"
				/>
			<label htmlFor="image" />
			<br />
			<input 
				type="url" 
				id="image"
				placeholder='Upload your picture url' 
				hidden
				defaultValue={formData.image} 
				onChange={handleChange}
				required
				name="image"
				/>
			<br />
			<button 
				type="submit">
				Submit
				</button>
		</form>
	)
}

export default Newblogger
