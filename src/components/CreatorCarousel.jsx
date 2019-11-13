import React from 'react';
import Creator from './Creator';


var masterCreatorCarousel = [
  {
    quote: 'Lorem ipsum si amet dolor',
    name: 'Lorem ipsum',
    job: 'This is my job title'
  },
  {
    quote: 'Lorem ipsum si amet dolor',
    name: 'Lorem ipsum',
    job: 'This is my job title'
  },
  {
    quote: 'Lorem ipsum si amet dolor',
    name: 'Lorem ipsum',
    job: 'This is my job title'
  }
];

function CreatorCarousel(){
  return(
    <div>
      <h3>In the words of our creators</h3>
      <div className="row">
        {masterCreatorCarousel.map((creator, index) =>
          <Creator quote={creator.quote}
            name={creator.name}
            job={creator.job}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default CreatorCarousel;