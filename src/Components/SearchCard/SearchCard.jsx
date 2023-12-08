import React from 'react';
import Items from '../Items/Items';
import './SearchCard.css'

const SearchCard = ({ courses }) => {
  return (
    <div className='main-card-container'>
      <div className='card'>
        {courses.map((item, i) => (
          <Items 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            free={item.free}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchCard;