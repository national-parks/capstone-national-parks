import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import imageA from "./tent trails.jpg"
import imageB from "./riogrande sandbarl.jpg"
import imageC from "./carlsbadstairway.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchFiveRandomParkImages } from '../../store/parkImages'


export function CarouselComponent() {
	const [index, setIndex] = useState(0);

	const parkImages = useSelector(state => state.parkImages)

	const dispatch = useDispatch()

	const effects = () => {
		dispatch (fetchFiveRandomParkImages())
	}

	useEffect(effects, [])

	console.log(parkImages)

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>

			{parkImages.map(parkImage => {
				return (
					<Carousel.Item>
					<img className="image d-block w-100" src={parkImage.parkImageUrl} alt={parkImage.parkImageCaption}/>
					<Carousel.Caption>
						<h3>{parkImage.parkImageCaption}</h3>
					</Carousel.Caption>
				</Carousel.Item>
			)})}

		</Carousel>
	);
}