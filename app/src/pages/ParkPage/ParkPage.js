import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import "./ParkPage.css"


export const ParkPage = () => {
	return (
	<>
		<section>

		<div className="container-fluid mt-5">
			<div className="row">
				<div className="col h1">Park Name</div>
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
					<img className="img-fluid" src="https://i.ytimg.com/vi/BHACKCNDMW8/maxresdefault.jpg" alt="Placeholder" />
				</div>

				<div className="col">
					Park Description goes here. The only thing I found in the fridge was a dead dove in a bag. And I wouldn't
					just lie there, if that's what you're thinking. That's not what I WAS thinking. The Army had half a day.
					I just haven't had sex in a month. You know, you've been here two months. It's hard to gauge time. Gosh Mom…
					after all these years, God's not going to take a call from you. And here you are coming out of your mother's
					third base! Dad asked me to do this on the day he pleads not guilty, as a spectacular protest. A…. ? A group
					of British builders operating outside the O.C.
					<br /> <br />
					It's as Ann as the nose on plain's face. For there's a man inside me, and only when he's finally out, can I
					walk free of pain. Stop licking my hand, you horse's ass! You must teach me the ways of the secular flesh.
					You just made a fool out of yourself in front of T-Bone.
				</div>

			</div>
		</div>

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
					<div className="col"><h4 className="border-bottom">Park Contact and Information</h4></div>
				</div>

				<div className="row pt-2 px-5 pb-5">
					<div className="col">
						Park contact and information blah
					</div>
				</div>
			</div>
			{/* -------------------- End Park Contact/Info Section -------------------- */}

		</section>
</>
)}