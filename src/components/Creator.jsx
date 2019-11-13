import React from 'react';
import PropTypes from 'prop-types';

function Creator(props){
  return(
    <div>
      <div className = "col-md-4 carousel">
        <h5>{props.quote}</h5>
        <p>{props.name}, {props.job}</p>

      </div>      
    </div>
  );
}

export default Creator;