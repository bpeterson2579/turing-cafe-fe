import './ReservationForm.css';
import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation);
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return(
      <div className='form'>
        <input type='text' placeholder='Name' name='name' id='name' value={this.state.name} onChange={event => this.handleChange(event)}/>
        <input type='text' placeholder='Date (mm/dd)' name='date' id='date' value={this.state.date} onChange={event => this.handleChange(event)}/>
        <input type='text' placeholder='Time' name='time' id='time' value={this.state.time} onChange={event => this.handleChange(event)}/>
        <input type='text' placeholder='Number of Guests' name='number' id='number' value={this.state.number} onChange={event => this.handleChange(event)}/>
        <button className='submit-res' onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </div>
    )
  }
}

export default ReservationForm;