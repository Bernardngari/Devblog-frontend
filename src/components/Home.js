import React from 'react'
import {useEffect, useState} from "react"
import Homefeed from './Homefeed'
/*Rendered through App component,passes props to Homefeed*/
function Home(){
	const[blogs, setBlogs] = useState([])
	useEffect(() => {
		let url = "http://localhost:9292/bloggers"
		fetch(url)
			.then( res => res.json())
			.then(data => setBlogs(data))
	},[])

	return (
		<div>
			<Homefeed blogs={blogs} />
		</div>
	)
}

export default Home
