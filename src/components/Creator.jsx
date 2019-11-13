import React from 'react';
import PropTypes from 'prop-types';

function Creator(props){
  return(
    <div>
      <h3>In the words of our creators</h3>
      <div className="row">
      <div className = "col-md-4">
        <h5>{props.quote}</h5>
        <p>{props.name}, {props.job}</p>

      </div>      
      </div>
    </div>
  );
}

Creator.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
}

export default Creator;