import React from 'react';
import PropTypes from 'prop-types';
import './Creator.css';

function Creator(props){
  return(
    <div className="col-md-4 creators">
      <div>
        <h5>{props.quote}</h5>
        <p>{props.name}, {props.job}</p>

      </div>      
    </div>
  );
}

export default Creator;