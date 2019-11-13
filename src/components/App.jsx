import React from 'react';
import SignUp from './SignUp';
import Image from './SplashScreenPicture';
import Creator from './Creator';
import CreatorCarousel from './CreatorCarousel';
import { Switch, Route } from 'react-router-dom';
import GetStarted from './GetStarted';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={SignUp} />
        <Route path='/signyourself' component={GetStarted} />
      </Switch>
    </div>
  );
}

export default App;