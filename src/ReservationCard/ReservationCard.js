import './ReservationCard.css';
import React from 'react';

const ReservationCard = ({ id, name, date, time, number }) => {
  return (
    <div className='reservation-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}pm</p>
      <p>Number of Guests: {number}</p>
      <button className='cancel-button'>Cancel</button>
    </div>
  )
}

export default ReservationCard;