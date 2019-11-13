import React from 'react';
import SignUp from './SignUp';

import Creator from './Creator';
import CreatorCarousel from './CreatorCarousel';
import GetStarted from './GetStarted';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div className="container">
      <SignUp />
      <Switch>
        <Route exact path='/' component={CreatorCarousel} />
        <Route path='/signyourself' component={GetStarted} />
      </Switch>
    </div>
  );
}

export default App;