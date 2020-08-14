import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import PageNotFound from './components/404page/404page';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact 
        path="/" 
        render={(props) => <Welcome{...props} name="Davey" />}
      />
      <Route exact 
        path="/welcome/:name" 
        render={(props) => <Welcome{...props} name={props.match.params.name} />}
      />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/pageNotFound" component={PageNotFound} />
    </div>
  );
  }
export default App