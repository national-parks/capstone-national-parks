import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export const ParkSearch = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">

					<div className="col-3">
						<div className="container bg-dark">Refine By Park Amenities</div>
					</div>

					<div className="col-9">

						<div className="row">
							<div className="offset-1 col-6">
								<form>
									<input type='text' id='search' name='search' value='Search For Parks...' />
								</form>
							</div>
							<div className="col-3">
								BY STATE FILTER
							</div>
						</div>

						<div className="row">
							<div className="col-4 bg-light">
								PICTURE
							</div>
							<div className="col-8">
								<div className="row">
									<div className="col">
										PARK NAME
									</div>
								</div>
								<div className="row">
									PARK DESCRIPTION
								</div>
							</div>
						</div>

						{/* Pagination for navigating */}

					</div>

				</div>
			</div>
		</>
	)
}