import React from "react"
import image from "./"
import Carousel from 'react-bootstrap/Carousel'
import parkpage
export const ParkPage = () => {
	return (
	<>
<h1>Park Name</h1>
<Carousel>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src="http://www.fillmurray.com/800/400"
			alt="First slide"
		/>
		<Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src=""
			alt="Third slide"
		/>

		<Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src="http://www.fillmurray.com/800/400"
			alt="Third slide"
		/>

		<Carousel.Caption>
			<h3>Third slide label</h3>
			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		</Carousel.Caption>
	</Carousel.Item>
</Carousel>

		<section className="park-description">
			<div className="description">
				<div className="float-md-right">
					<a className="btn btn-primary mb-5 pm-5" href="#" role="button">Favorite</a>
					<button className="btn btn-primary mb-5 pm-5" role="button">Wish List</button>
					<button className="btn btn-primary mb-5 pm-5" role="button">Visited</button>
					<p className="park-info mb-5 pm-5">
					igula semper id id. Libero in mi neque id et quibusdam, viverra turpis aenean at in integer, a egestas,
						dictumst vel mauris eu in dictum vel, sem a at consequat. Aptent feugiat consectetuer
						morbi tortor a voluptatem, ipsum est, varius fames ipsum augue sed sit. Vel posuere quis eros duis at, non
						vulputate ac sollicitudin, vel tincidunt mauris felis vel imperdiet nisl. Tortor
						nostra pellentesque neque suspendisse fringilla. Pede ut ut hendrerit mauris, natoque lobortis sociis tellus
						commodo. Eget nam, tristique nunc sed vitae in proin sit. Mauris etiam suspendisse
						massa enim aenean morbi, amet risus pede orci, quis enim pellentesque vivamus nec, augue hendrerit tempor
						nec arcu urna. Posuere suspendisse sodales erat qui risus, suscipit nec vestibulum semper,
						sit sed proin, ac lacinia sem massa id, tincidunt leo in nulla. Lacinia id, sodales purus nibh in elementum
						nec metus, elit dignissim pellentesque sit vel phasellus similique.</p>
				</div>
			</div>
		</section>
</>
)}