import React from 'react'
import { useState } from 'react'

function Addblog({id}){
		const[isAdding, setIsAdding] = useState(false)

	return (
		<div>
			{isAdding?
			 <Addblogform />
			 :
			 <i class="fa-solid fa-plus"></i>
			 }
		</div>
	)
}

export default Addblog
