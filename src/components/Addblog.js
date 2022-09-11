import React from 'react'
import Addblogform from './Addblogform'
import { useState } from 'react';

function Addblog({id}){

	function handle(e){
		console.log(e.target);
	}

	return (
		<div className='buttoncontainer'id={id}>
			<div 
			 	className='plus'
			  to="/addblog/:id" 
				id={id} 
				onClick={handle} >
				<i id={id}
				className="fa-solid fa-plus">
				</i>
			</div>
		</div>
	)
}

export default Addblog
