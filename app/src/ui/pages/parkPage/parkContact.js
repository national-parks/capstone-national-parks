import { useSelector } from 'react-redux'
import React from 'react'

export function ParkContact (props) {
	const {park} = props

return(
	<>
		<div className="row pt-2 px-5 pb-5">
			<div className="col">
				{park.parkOperatingHours}
			</div>
		</div>
	</>
)}