import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(){
  return(
    <div>
      <h1>Create on your own terms</h1>
      <h5>Lorem ipsum dolor si amet</h5>
      <Link to="/signyourself">Sign Up</Link>
    </div>
  );
}

export default SignUp;