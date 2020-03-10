import React from 'react';
import './App.css';
import Home from './Views/Home';
import CVList from './Views/CVList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return <Router>
			<Switch>
				<Route exact={true} path='/' component={Home} />
				<Route exact={true} path='/cv' component={CVList} />
			</Switch>
		</Router>;
}

export default App;
