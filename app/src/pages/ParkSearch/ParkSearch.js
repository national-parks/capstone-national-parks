import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import './ParkSearch.css'

export const ParkSearch = () => {
	return (
		<>
		<div className="container-fluid">
			<div className="row my-3">

				{/* -------------------- Search by Amenities Section -------------------- */}
				<div className="col-2 my-3 mx-4">
				<div className="container backgroundForest text-center py-3"><h4 className="border-bottom">Refine Search by Amenities</h4>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="trashrecyclingcollection" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="trashrecyclingcollection" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="dumpster" />&nbsp;</span>
							</label>
							<br /> Trash Collection
						</div>
						<div className="col">
							<label for="toilets" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="toilets" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="toilet-paper" />&nbsp;</span>
							</label>
							<br /> Toilets on Site
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="internetconnectivity" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="internetconnectivity" />
								<span className="checkLabel"><FontAwesomeIcon icon="wifi" /></span>
							</label>
							<br /> Internet Available
						</div>
						<div className="col">
							<label for="showers" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="showers" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="shower" />&nbsp;</span>
							</label>
							<br /> Showers on Site
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="cellphonereception" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="cellphonereception" />
								<span className="checkLabel">&nbsp;&nbsp;<FontAwesomeIcon icon="mobile-alt" />&nbsp;&nbsp;</span>
							</label>
							<br /> Cellphone Reception
						</div>
						<div className="col">
							<label for="laundry" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="laundry" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="tshirt" />&nbsp;</span>
							</label>
							<br /> Laundry on Site
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="dumpstation" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="dumpstation" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="poop" />&nbsp;</span>
							</label>
							<br /> RV Dump Station
						</div>
						<div className="col">
							<label for="campstore" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="campstore" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="cash-register" />&nbsp;</span>
							</label>
							<br /> Campstore Available
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="stafforvolunteerhostonsite" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="stafforvolunteerhostonsite" />
								<span className="checkLabel"><FontAwesomeIcon icon="caravan" /></span>
							</label>
							<br /> Host on Site
						</div>
						<div className="col">
							<label for="potablewater" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="potablewater" />
								<span className="checkLabel">&nbsp;&nbsp;<FontAwesomeIcon icon="tint" />&nbsp;&nbsp;</span>
							</label>
							<br /> Potable Water Available
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="iceavailableforsale" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="iceavailableforsale" />
								<span className="checkLabel"><FontAwesomeIcon icon="igloo" /></span>
							</label>
							<br /> Ice for Sale
						</div>
						<div className="col">
							<label for="firewoodforsale" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="firewoodforsale" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="fire-alt" />&nbsp;</span>
							</label>
							<br /> Firewood for Sale
						</div>
					</div>

					<div className="row py-3 font-weight-bold">
						<div className="col">
							<label for="amphitheater" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="amphitheater" />
								<span className="checkLabel"><FontAwesomeIcon icon="theater-masks" /></span>
							</label>
							<br /> Amphitheaters
						</div>
						<div className="col">
							<label for="foodstoragelockers" className="bg-white rounded-circle p-3">
								<input type="checkbox" id="foodstoragelockers" />
								<span className="checkLabel">&nbsp;<FontAwesomeIcon icon="box" />&nbsp;</span>
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
				<div className="col-4">
					Filter By State:
					<select name="state" size="1" className="p-2">
						<option value="">All States</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">Dist of Columbia</option>
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

			<div className="col-4 bg-light py-3">
				<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f0a23c8-5536-414b-b889-860a7a9f419b/d4teg4h-71a65b70-d1e4-423b-b5be-5cfa0e65ce1e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xZjBhMjNjOC01NTM2LTQxNGItYjg4OS04NjBhN2E5ZjQxOWIvZDR0ZWc0aC03MWE2NWI3MC1kMWU0LTQyM2ItYjViZS01Y2ZhMGU2NWNlMWUucG5nIn1dXX0.aIdoTPYjO4n15fkYqluGF5JJV0eadJL3ozbnJyze40Y"
						 alt="Park Picture" className="img-fluid" />
			</div>
			<div className="col-8 bg-light py-3">
				<div className="row">
					<div className="col">
						<h2>Park Name</h2>
					</div>
				</div>
				<div className="row">
					I hate the Wetlands. They're stupid and wet, and there are bugs everywhere, and I think I maced a crane.
					Pound is tic-tac-toe, right? Get rid of the Seaward. Lucille: I'll leave when I'm good and ready. Wine
					only turns to alcohol if you let it sit. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza.
				</div>
			</div>

			<div className="col-4 py-3">
				<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f0a23c8-5536-414b-b889-860a7a9f419b/d4teg4h-71a65b70-d1e4-423b-b5be-5cfa0e65ce1e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xZjBhMjNjOC01NTM2LTQxNGItYjg4OS04NjBhN2E5ZjQxOWIvZDR0ZWc0aC03MWE2NWI3MC1kMWU0LTQyM2ItYjViZS01Y2ZhMGU2NWNlMWUucG5nIn1dXX0.aIdoTPYjO4n15fkYqluGF5JJV0eadJL3ozbnJyze40Y"
						 alt="Park Picture" className="img-fluid" />
			</div>
			<div className="col-8 py-3">
				<div className="row">
					<div className="col">
						<h2>Park Name</h2>
					</div>
				</div>
				<div className="row">
					I hate the Wetlands. They're stupid and wet, and there are bugs everywhere, and I think I maced a crane.
					Pound is tic-tac-toe, right? Get rid of the Seaward. Lucille: I'll leave when I'm good and ready. Wine
					only turns to alcohol if you let it sit. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza.
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