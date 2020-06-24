import React, { useEffect } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import "./parkPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { ParkDetail } from '../parkPage/parkDetail'
import { ParkContact } from '../parkPage/parkContact'


export const ParkPage = ({match}) => {

	const park = useSelector(state => (
		state.parks
			? state.parks.find(park => park.parkId === match.params.parkId)
			: []
	));

	return (
		<>
			<section>

				{park && (<ParkDetail park = {park}/>)}

				{/* -------------------- Amenities Section -------------------- */}
				<div className="container-fluid amenitiesBackground">
					<div className="row mt-4 p-2">
						<div className="col"><h4 className="border-bottom">Park Amenities</h4></div>
					</div>

					<div className="row font-weight-bold text-center pb-4">

						<div className="col">
							<label htmlFor="trashrecyclingcollection" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="trashrecyclingcollection" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="dumpster" />&nbsp;</span>
							</label>
							<br /> Trash Collection
						</div>

						<div className="col">
							<label htmlFor="toilets" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="toilets" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="toilet-paper" />&nbsp;</span>
							</label>
							<br /> Toilets on Site
						</div>

						<div className="col">
							<label htmlFor="internetconnectivity" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="internetconnectivity" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="wifi" /></span>
							</label>
							<br /> Internet Available
						</div>

						<div className="col">
							<label htmlFor="showers" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="showers" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="shower" />&nbsp;</span>
							</label>
							<br /> Showers on Site
						</div>

						<div className="col">
							<label htmlFor="cellphonereception" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="cellphonereception" />
								<span className="checkLabel">&nbsp;&nbsp;<FontAwesomeIcon className="fa-2x" icon="mobile-alt" />&nbsp;&nbsp;</span>
							</label>
							<br /> Cellphone Reception
						</div>

						<div className="col">
							<label htmlFor="laundry" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="laundry" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="tshirt" />&nbsp;</span>
							</label>
							<br /> Laundry on Site
						</div>

						<div className="col">
							<label htmlFor="dumpstation" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="dumpstation" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="poop" />&nbsp;</span>
							</label>
							<br /> RV Dump Station
						</div>
					</div>

					<div className="row font-weight-bold text-center pb-2 mt-2 mb-4">
						<div className="col">
							<label htmlFor="campstore" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="campstore" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="cash-register" />&nbsp;</span>
							</label>
							<br /> Campstore Available
						</div>

						<div className="col">
							<label htmlFor="stafforvolunteerhostonsite" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="stafforvolunteerhostonsite" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="caravan" /></span>
							</label>
							<br /> Host on Site
						</div>

						<div className="col">
							<label htmlFor="potablewater" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="potablewater" />
								<span className="checkLabel">&nbsp;&nbsp;<FontAwesomeIcon className="fa-2x" icon="tint" />&nbsp;&nbsp;</span>
							</label>
							<br /> Potable Water Available
						</div>

						<div className="col">
							<label htmlFor="iceavailableforsale" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="iceavailableforsale" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="igloo" /></span>
							</label>
							<br /> Ice for Sale
						</div>

						<div className="col">
							<label htmlFor="firewoodforsale" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="firewoodforsale" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="fire-alt" />&nbsp;</span>
							</label>
							<br /> Firewood for Sale
						</div>


						<div className="col">
							<label htmlFor="amphitheater" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="amphitheater" />
								<span className="checkLabel"><FontAwesomeIcon className="fa-2x" icon="theater-masks" /></span>
							</label>
							<br /> Amphitheaters
						</div>

						<div className="col">
							<label htmlFor="foodstoragelockers" className="bg-light rounded-circle p-3 border">
								<input type="checkbox" id="foodstoragelockers" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon className="fa-2x" icon="box" />&nbsp;</span>
							</label>
							<br /> Food Storage Lockers
						</div>


					</div>
				</div>
				{/* -------------------- End Amenities Section -------------------- */}


				{/* -------------------- Campgrounds List Section -------------------- */}
				<div className="container-fluid amenitiesBackground mt-5">
					<div className="row mt-4 p-2">
						<div className="col"><h4 className="border-bottom">Campgrounds List</h4></div>
					</div>

					<div className="row font-weight-bold text-center pb-4">

						<div className="col">
							<label className="bg-light rounded-circle p-3 border">
								<span><FontAwesomeIcon className="fa-2x" icon="campground" /></span>
							</label>
							<br /> Campground A
						</div>

						<div className="col">
							<label className="bg-light rounded-circle p-3 border">
								<span><FontAwesomeIcon className="fa-2x" icon="campground" /></span>
							</label>
							<br /> Campground B
						</div>

					</div>
				</div>
				{/* -------------------- End Campgrounds List Section -------------------- */}


				{/* -------------------- Park Contact/Info Section -------------------- */}
				<div className="container-fluid amenitiesBackground mt-4">
					<div className="row mt-4 p-2">
						<div className="col"><h4 className="border-bottom">Park Hours Information</h4></div>
					</div>

					{park && (<ParkContact park = {park}/>)}
				</div>
				{/* -------------------- End Park Contact/Info Section -------------------- */}

			</section>
		</>
	)}