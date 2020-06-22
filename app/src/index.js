import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {Home} from "./pages/home/Home";
import {Footer} from "./sharedComponents/Footer";
import {AboutPage} from "./pages/AboutPage";
import {Header} from "./sharedComponents/Header";
import {ParkSearch} from './pages/ParkSearch/ParkSearch';
import {ProfilePage} from './pages/ProfilePage'
import {ParkPage} from './pages/parkPage/parkPage'

import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox} from '@fortawesome/free-solid-svg-icons'
import {FourOhFour} from "./pages/FourOhFour";
library.add(faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox);




const Routing = () => (
	<>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/park-search" component={ParkSearch}/>
				<Route exact path="/AboutPage" component={AboutPage}/>
				<Route exact path="/ProfilePage" component={ProfilePage}/>
				<Route exact path="/ParkPage" component={ParkPage}/>
				<Route component={FourOhFour}/>

			</Switch>
			<Footer />
		</BrowserRouter>
	</>
);

ReactDOM.render(Routing(), document.querySelector('#root'));