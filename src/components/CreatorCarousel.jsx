import React from 'react';
import Creator from './Creator';


var masterList = [
  {
    quote: 'Lorem ipsum si amet dolor',
    name: 'Lorem ipsum',
    job: 'This is my job title',
    image: 'Image'
  },
  {
    quote: 'Lorem ipsum si amet dolor',
    name: 'Lorem ipsum',
    job: 'This is my job title',
    image: 'Image'
  },
  {
    quote: 'Lorem ipsum si amet dolor',
    name: 'Lorem ipsum',
    job: 'This is my job title',
    image: 'Image'
  }
];

function List(){
  return(
    <div>
      {masterList.map((list, index) =>
      <Creator quote={list.quote}
        name={list.name}
        job={list.job}
        image={list.image}
        key={index}/>
      )}
    </div>
  );
}

export default List;