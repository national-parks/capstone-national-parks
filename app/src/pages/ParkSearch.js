import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


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
								SEARCH BAR
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

						{/*  */}
						<nav aria-label="pageNav">
							<ul className="pagination">
								<li className="page-item">
									<a className="page-link" href="#" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
										<span className="sr-only">Previous</span>
									</a>
								</li>
								<li className="page-item"><a className="page-link" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item">
									<a className="page-link" href="#" aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
										<span className="sr-only">Next</span>
									</a>
								</li>
							</ul>
						</nav>

					</div>

				</div>
			</div>
		</>
	)
}