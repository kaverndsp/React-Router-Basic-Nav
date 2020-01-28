import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    
    <Route exact path="/" >
      <Home />
    </Route>
    
    <Route path="/about">
      <About />
    </Route>
    
    <Route path="/contact">
      <Contact />
    </Route>
  
  </div>
);

export default App;
