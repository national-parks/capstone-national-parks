import React from 'react'
import { useSelector } from 'react-redux'

export function ParkDetail (props) {
	console.log(props)
	const {park}=props
	const parkImage=useSelector(state => {
		return state.parkImages
			? state.parkImages.find(parkImage => parkImage.parkImageParkId === park.parkId)
			: []
	})

	return(
		<>
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="col h1">{park.parkFullName}</div>
					<div className="col text-right">
						<button className="btn btn-primary p-2 mx-2">Favorite</button>
						<button className="btn btn-primary p-2 mx-2">Wish List</button>
						<button className="btn btn-primary p-2 mx-2">Visited</button>
					</div>
				</div>
			</div>


			<div className="container-fluid">
				<div className="row">
					<div className="col">
						{parkImage && <img src={`${parkImage.parkImageUrl}?width=700`}
															 alt={parkImage.parkImageCaption} className="img-fluid" />}
					</div>

					<div className="col">
						{park.parkDescription}
					</div>

				</div>
			</div>
	</>
	)
}

