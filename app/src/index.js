import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {ParkPage} from "./pages/ParkPage/ParkPage";
import {Header} from './sharedComponents/Header'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox, faCampground} from '@fortawesome/free-solid-svg-icons'

library.add(faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox, faCampground);

const Routing = () => (
	<>
		<BrowserRouter>

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/ParkPage" component={ParkPage}/>
				<Route exact path="/Header" component={Header}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</>
);

ReactDOM.render(<Routing/>, document.querySelector('#root'));