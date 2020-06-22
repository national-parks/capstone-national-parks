import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {Home} from "./ui/home/Home";
import {Footer} from "./ui/sharedComponents/Footer";
import {AboutPage} from "./ui/pages/AboutPage";
import {Header} from "./ui/sharedComponents/Header";
import {ParkSearch} from './ui/pages/ParkSearch/ParkSearch';
import {ProfilePage} from './ui/pages/ProfilePage'
import {ParkPage} from './ui/pages/parkPage/parkPage'
import {FourOhFour} from "./ui/pages/FourOhFour";

import reducer from './store'
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faDumpster, faToiletPaper, faWifi, faShower, faMobileAlt, faTshirt, faPoop, faCashRegister, faCaravan, faTint, faIgloo, faFireAlt, faTheaterMasks, faBox} from '@fortawesome/free-solid-svg-icons'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { ParksPosts } from './ui/posts/parks/parksPosts'
import { PostCard } from './ui/posts/parks/parksPostCard'

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
				<Route exact path="/parkPosts" component={ParksPosts}/>
				<Route exact path="/AboutPage" component={AboutPage}/>
				<Route exact path="/ProfilePage" component={ProfilePage}/>
				<Route exact path="/ParkPage" component={ParkPage}/>
				<Route component={FourOhFour}/>

			</Switch>
			<Footer />
		</BrowserRouter>
		</Provider>
	</>
);

ReactDOM.render(Routing(store), document.querySelector('#root'));