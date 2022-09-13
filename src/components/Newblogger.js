import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Newblogger({onAddUser}){
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
		fetch("https://devblog-2.herokuapp.com/addbloggers",{
			method:"POST",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify(formData)
		})
		.then(res => res.json())
		.then(newblogger =>onAddUser(newblogger))
			setTimeout(()=>{navigate("/")},500)
	}
	
	return (
		<form onSubmit={handleSubmit} className="addblogger-form">
			<div style={{color:"white", fontSize: 40}}>Join the society</div>
			<div className='signup'>
				<img src={formData.image} alt="user avatar" />
			</div>
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
