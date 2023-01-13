import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Homepage from '../Components/Homepage';
import HomepageLogedIn from '../Components/HomepageLogedIn';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/homepage"><Homepage /></Route>
				<Route exact path="/homepagelogedin"><HomepageLogedIn /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;