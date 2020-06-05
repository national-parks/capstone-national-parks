import React from "react"
import image from "./nationalparks.jpg"
export const Header = () => {

	return (<>
			<div className="container headerImage">
				<div>
					<ul className="nav">
						<li className="nav-item text-right">
							<a className="nav-link active" href="#">Active</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
};