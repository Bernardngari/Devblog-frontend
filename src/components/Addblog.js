import React from 'react'
import Addblogform from './Addblogform'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Addblog({id}){
	const navigate = useNavigate()
	let url = `/addblog/${id}`

	function handle(e){
		if(e){
			navigate(url)
		}
	}

	return (
		<div className='buttoncontainer'id={id}>
			<div 
			 	className='plus'
			  to="/addblog/:id" 
				id={id} 
				onClick={handle} >
				Add blog
			</div>
		</div>
	)
}

export default Addblog
