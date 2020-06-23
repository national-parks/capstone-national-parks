import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import './ParkSearch.css'
import { useDispatch, useSelector } from 'react-redux'
import { ParkCard } from './ParkCard'
import { fetchAllParks } from '../../../store/parks'
import { fetchAllParkImages } from '../../../store/parkImages'

export const ParkSearch = () => {
	const dispatch = useDispatch()
	const parks = useSelector(state => state.parks ? state.parks : [])

	const sideEffects = () => {
		dispatch(fetchAllParks())
		dispatch(fetchAllParkImages())
	}
	React.useEffect(sideEffects,[])
	return (
		<>
		<div className="container-fluid">
			<div className="row my-3">

				{/* -------------------- Search by Amenities Section -------------------- */}
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

				{/* -------------------- Search -------------------- */}
				<div className="row d-flex justify-content-between">
				<div className="col-8">
					<form>
						<input className="p-2" type='text' id='search' name='search' placeholder='Search For Parks...' />
					</form>
				</div>
				<div className="col-4 d-flex align-items-center justify-content-end">
					Filter By State:
					<select name="state" size="1" className="p-2 ml-2">
						<option value="">All States</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
				</div>
			</div>

			{/* ---------------------Park Output-------------------- */}
			<div className="row my-3">


				{parks.map(park => <ParkCard park = {park}/>)}
		</div>

		{/* Pagination for navigating */}

			</div>

			</div>
		</div>
		</>
	)
}