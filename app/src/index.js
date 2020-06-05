import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {Home} from "./pages/Home";
import {Header} from "./sharedComponents/Header"
import {FourOhFour} from "./pages/FourOhFour";


const Routing = () => (
	<>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/header" component={Header}/>
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</>
);

ReactDOM.render(<Routing/>, document.querySelector('#root'));