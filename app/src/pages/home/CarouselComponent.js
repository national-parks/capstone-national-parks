import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imageA from "./tent trails.jpg"
import imageB from "./riogrande sandbarl.jpg"
import imageC from "./carlsbadstairway.jpg"
export function CarouselComponent() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
					<img className="image-fluid d-block w-100" src= {imageA} alt="Tent Rocks"/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="image-fluid d-block w-100" src={imageB} alt="Second slide"/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="image-fluid d-block w-100" src={imageC} alt="Third slide"/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}