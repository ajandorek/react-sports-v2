import React, { Component } from 'react';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { geocodeAddress } from '../helpers/helpers';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time: '',
      startDate: moment(),
      sport: '',
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    console.log(this.state.startDate._d.toString());
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    const { title, startDate, sport, location } = this.state;
    e.preventDefault();
    startDate = startDate.toDate();
    const latlng = geocodeAddress(location)
      .then(latlng => {
        Meteor.call('events.insert', title, sport, location, startDate, latlng, (err, res) => {
          if (!err) {
            console.log('Event Saved');
          } else {
            console.log('Submission Error', err);
          }
        });
      })
      .then(() => {
        this.setState({
          title: '',
          time: '',
          startDate: moment(),
          sport: '',
          location: ''
        });
      });
  }

  render() {
    return (
      <div className="sidebar">
        <h1>Add A New Game</h1>
        <form className="sidebar__form">
          <label>Event Name</label>
          <input
            type="text"
            placeholder="Event Name"
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange.bind(this)}
          />
          <label>Sport</label>
          <select
            value={this.state.sport}
            onChange={this.handleInputChange.bind(this)}
            type="select"
            name="sport"
          >
            <option value="" disabled defaultValue={true}>
              Select your sport
            </option>
            <option value="Baseball">Baseball</option>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
            <option value="Soccer">Soccer</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Other">Other</option>
          </select>
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleInputChange.bind(this)}
            name="location"
          />
          <label>Time</label>
          <DatePicker
            className="sidebar__form-datepicker"
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="LLL"
            style={{ width: '90%' }}
          />
          <button className="button" onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Sidebar;
