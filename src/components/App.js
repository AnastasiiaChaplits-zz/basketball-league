import * as React from 'react';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Home from './Home';
import Players from './Players'
import Teams from './Teams';
import Navbar from './Navbar';

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Router path='/' exact>
          <Home />
        </Router>
        <Route path='/players'>
          <Players />
        </Route>
        <Route path='/teams'>
          <Teams />
        </Route>
      </div>
    </Router>
  )
}