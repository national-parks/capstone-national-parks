import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {Home} from "./ui/home/Home";
import {Footer} from "./ui/sharedComponents/Footer";
import {AboutPage} from "./ui/AboutPage";
import {Header} from "./ui/sharedComponents/Header";
import {ParkSearch} from './ui/ParkSearch/ParkSearch';
import {ProfilePage} from './ui/ProfilePage'
import reducer from './store'
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox} from '@fortawesome/free-solid-svg-icons'
import {FourOhFour} from "./ui/FourOhFour";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
library.add(faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox);
const store = configureStore({reducer})



const Routing = (store) => (
	<>
		<Provider store={store}>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/park-search" component={ParkSearch}/>
				<Route exact path="/AboutPage" component={AboutPage}/>
				<Route exact path="/ProfilePage" component={ProfilePage}/>
				<Route component={FourOhFour}/>

			</Switch>
			<Footer />
		</BrowserRouter>
		</Provider>
	</>
);

ReactDOM.render(Routing(store), document.querySelector('#root'));