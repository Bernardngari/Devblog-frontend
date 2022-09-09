import React from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';


function Deleteblog({id}){
	//let navigate = useNavigate()
		function handleSubmit(){
			fetch(`http://localhost:9292/blogposts/${id}`,{
				"method" : "DELETE",
				"headers" :{
					"Content-Type": "application/json"
					},
			})
			window.location.reload()
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
