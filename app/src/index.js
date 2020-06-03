import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {Header} from "./sharedComponents/Header"
import {Footer} from "./sharedComponents/Footer"

const Routing = () => (
	<>
		<BrowserRouter>

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
				<Route exact path="/" component={Footer}/>
			</Switch>
		</BrowserRouter>
	</>
);

ReactDOM.render(<Routing/>, document.querySelector('#root'));