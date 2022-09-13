import React from 'react'
import {useEffect, useState} from "react"
import Homefeed from './Homefeed'
import Newblogger from './Newblogger'
/*Rendered through App component,passes props to Homefeed*/
function Home(){
	const[blogs, setBlogs] = useState([])
	useEffect(() => {
		let url = "https://devblog-2.herokuapp.com/bloggers"
		fetch(url)
			.then( res => res.json())
			.then(data => setBlogs(data.reverse()))
	},[blogs])

	function onAddUser(newblogger){
		let newlist = [...blogs, newblogger]
		setBlogs(newlist)
	}

	return (
		<div className='flex'>
			{blogs.length > 0?
			<>
			<Homefeed blogs={blogs} />
			</>
			: 
			<>
				<p className='patience'>Loading... </p>
				<Newblogger onAddUser={onAddUser}/>
				
			</>
			}
		</div>
	)
}

export default Home
