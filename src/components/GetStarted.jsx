import React from 'react';


function GetStarted(){
  return(
    <div>
      <h4>Sign up</h4>
      <form>
        <input type="text"
          id='names'
          placeholder='Name' />
      </form>
      <form>
        <input type="text"
          id='emails'
          placeholder='Email' />
      </form>
    </div>
  );
}

export default GetStarted;