import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {AboutPage} from "./pages/AboutPage";
import {Header} from "./sharedComponents/Header"

const Routing = () => (
	<>
		<BrowserRouter>

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/AboutPage" component={AboutPage}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</>
);

ReactDOM.render(<Routing/>, document.querySelector('#root'));