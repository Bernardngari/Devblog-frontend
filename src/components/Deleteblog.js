import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';


function Deleteblog({id,onDelete}){
		function handleSubmit(){
			fetch(`https://devblog-2.herokuapp.com/blogposts/${id}`,{
				"method" : "DELETE",
				"headers" :{
					"Content-Type": "application/json"
					},
			})
			.then(r => r.json())
			.then((deletedBlog) => onDelete(deletedBlog))
		}

	function submit(){
		confirmAlert({
			title: "Confirm deletion",
			message:"All data will be lost. Wish to delete?",
			buttons: [
				{
					label: "Yes",
					onClick : ()=> handleSubmit()
				},
				{
					label: "No",
					onClick: () => null
				}
			]
		})
	}
			
	return (
		< span onClick={submit} className="delete">
			<i className="fa-solid fa-trash"></i> Delete
		</span>
	)
}

export default Deleteblog
