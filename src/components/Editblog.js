import React from 'react'
import Editform from './Editform'
import { useState } from 'react';
function Editblog({blog, onEditBlog}){
		const[isEditing, setisEditing] = useState(false)

	function handleEdit(e){
		if(e.target.id == blog.id){
			setisEditing(() => !isEditing)
		} else{
			return isEditing
		}
	}

	//console.log(isEditing);
	return (
		<span onClick={handleEdit}>
			{isEditing ? 
			<Editform blog={blog} onEditBlog={onEditBlog}/>
			: 
			<i className="fa-regular fa-pen-to-square" id={blog.id}></i> } 
		</span>
	)
}

export default Editblog
