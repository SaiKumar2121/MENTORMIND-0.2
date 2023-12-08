import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/course/${props.id}`} className='link-class'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className='free-paid'>
          <div className='free'>{props.free}</div>
          <div className='paid'>₹{props.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Items;