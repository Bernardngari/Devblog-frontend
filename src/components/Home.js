import React from 'react'
import {useEffect, useState} from "react"
import Homefeed from './Homefeed'
/*Rendered through App component,passes props to Homefeed*/
function Home(){
	const[blogs, setBlogs] = useState([])
	useEffect(() => {
		let url = "https://devblog-2.herokuapp.com/bloggers"
		fetch(url)
			.then( res => res.json())
			.then(data => setBlogs(data.reverse()))
	},[])

	return (
		<div className='flex'>
			{blogs.length > 0?
			<Homefeed blogs={blogs} />
			: 
			<p className='patience'>Good things take time. Please be patient as awesomeness loads. </p>
			}
		</div>
	)
}

export default Home
