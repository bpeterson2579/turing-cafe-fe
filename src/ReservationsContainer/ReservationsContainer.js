import './ReservationsContainer.css';
import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationsContainer = ({reservations}) => {

  const reservationList = reservations.map(reservation => {
    return (
      <ReservationCard 
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.key}
      />
    )
  })

  return (
    <div className='reservation-container'>
      { reservationList }
    </div>
  )
}

export default ReservationsContainer