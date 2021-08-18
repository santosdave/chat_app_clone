import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { StylesProvider } from '@material-ui/core/styles';

import SignUp from '../SignUp';
import Login from '../Login';
const routes = [
	{ path: '/signup', component: SignUp },
	{ path: '/login', component: Login },
	/* { path: '/room', component: Room }, */
	{ path: '/', component: Login }
];
function App() {
  return (
    <StylesProvider injectFirst>
      <div className="App">
            <Router>
                <Switch>
                  {routes.map(({path, component})=> <Route key={path} path={path} component={component} exact/>)}
                </Switch>
            </Router>
      </div>
    </StylesProvider>
      
  );
}

export default App;
