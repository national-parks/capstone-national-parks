import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import ParkSearchStyle from "./ParkPage.module.css"


export const ParkPage = () => {
	return (
	<>
		<section className={ParkSearchStyle}>

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





		</section>
</>
)}