import React from 'react'
import Editform from './Editform'
import { useState } from 'react';
function Editblog({blog, onEditBlog}){
		const[isEditing, setisEditing] = useState(false)

	function handleEdit(e){
		if(e.target.id == blog.id){
			setisEditing((isEditing) => !isEditing)
		} else{
			return isEditing
		}
	}
	return (
		<span onClick={handleEdit}>
			{isEditing? 
			<Editform blog={blog} onEditBlog={onEditBlog} isEditing={isEditing} setisEditing={setisEditing}/>
			: 
			<span className='edit'><i className="fa-regular fa-pen-to-square" id={blog.id}>  edit</i></span> } 
		</span>
	)
}

export default Editblog
