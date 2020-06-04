import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = () => {
	return (
		<>

			function ControlledCarousel() {
			const [index, setIndex] = useState(0);

			const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};

			return (
			<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
			<img
			className="d-block w-100"
			src=""
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
			src="holder.js/800x400?text=Second slide&bg=282c34"
			alt="Second slide"
			/>

			<Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<img
			className="d-block w-100"
			src="holder.js/800x400?text=Third slide&bg=20232a"
			alt="Third slide"
			/>

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

			render(<ControlledCarousel />);


			<div className="col-2 my-3 mx-4">
				<div className="container backgroundForest text-center py-3"><h4 className="border-bottom">Refine Search by Amenities</h4>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="trashrecyclingcollection" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="trashrecyclingcollection" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="dumpster" />&nbsp;</span>
							</label>
							<br /> Trash Collection
						</div>
						<div className="col">
							<label htmlFor="toilets" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="toilets" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="toilet-paper" />&nbsp;</span>
							</label>
							<br /> Toilets on Site
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="internetconnectivity" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="internetconnectivity" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="wifi" /></span>
							</label>
							<br /> Internet Available
						</div>
						<div className="col">
							<label htmlFor="showers" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="showers" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="shower" />&nbsp;</span>
							</label>
							<br /> Showers on Site
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="cellphonereception" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="cellphonereception" />
								<span className="checkLabel">&nbsp;&nbsp;<FontAwesomeIcon className="fa-2x" icon="mobile-alt" />&nbsp;&nbsp;</span>
							</label>
							<br /> Cellphone Reception
						</div>
						<div className="col">
							<label htmlFor="laundry" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="laundry" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="tshirt" />&nbsp;</span>
							</label>
							<br /> Laundry on Site
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="dumpstation" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="dumpstation" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="poop" />&nbsp;</span>
							</label>
							<br /> RV Dump Station
						</div>
						<div className="col">
							<label htmlFor="campstore" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="campstore" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="cash-register" />&nbsp;</span>
							</label>
							<br /> Campstore Available
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="stafforvolunteerhostonsite" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="stafforvolunteerhostonsite" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="caravan" /></span>
							</label>
							<br /> Host on Site
						</div>
						<div className="col">
							<label htmlFor="potablewater" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="potablewater" />
								<span className="checkLabel">&nbsp;&nbsp;<FontAwesomeIcon className="fa-2x" icon="tint" />&nbsp;&nbsp;</span>
							</label>
							<br /> Potable Water Available
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="iceavailableforsale" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="iceavailableforsale" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="igloo" /></span>
							</label>
							<br /> Ice for Sale
						</div>
						<div className="col">
							<label htmlFor="firewoodforsale" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="firewoodforsale" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="fire-alt" />&nbsp;</span>
							</label>
							<br /> Firewood for Sale
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label htmlFor="amphitheater" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="amphitheater" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="theater-masks" /></span>
							</label>
							<br /> Amphitheaters
						</div>
						<div className="col">
							<label htmlFor="foodstoragelockers" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="foodstoragelockers" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="box" />&nbsp;</span>
							</label>
							<br /> Food Storage Lockers
						</div>
					</div>

				</div>
			</div>

			<div className="col-9">

			</>
)
}