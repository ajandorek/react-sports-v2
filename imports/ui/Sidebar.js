import React, { Component } from 'react'
import moment from 'moment';

export class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      time: '',
      date: '',
      sport: '',
      location: ''
    }
  }

  handleSubmit(e) {
    // let momentTime = moment(this.state.time);
    // let momentDate = moment(this.state.date);
    // let appointmentMoment = moment({
    //   year: momentDate.year(),
    //   month: momentDate.month(),
    //   day: momentDate.date(),
    //   hour: momentTime.hours(),
    //   minute: momentTime.minutes()
    // });
    // console.log(moment(appointmentMoment._d).format('MM/DD/YYYY hh:mm A'));
    e.preventDefault();
    console.log(this.state);

    // axios.post('api/events', {
    //   title: this.state.title,
    //   sport: this.state.sport,
    //   location: this.state.location,
    //   time: appointmentMoment,
    // }).then(() => {
    //   this.props.fetchEvents('#');
    //   this.setState({
    //     title: '',
    //     time: '',
    //     date: '',
    //     sport: '',
    //     location: ''
    //   });
    // });
  }
  render() {
    return (
      <div className='sidebar'>
        <h1>Add A New Game</h1>
        <form className='sidebar__form'>
          <label>Event Name</label>
          <input
            type='text'
            placeholder='Event Name'
            value={this.state.title}
            onChange={(e, value) => this.setState({ title: value })}
          />
          <label>Sport</label>
          <select
            value={this.state.sport}
            onChange={(event, index, value) => this.setState({ sport: value })}
            type="select"
          >
            <option value="" disabled selected>Select your sport</option>
            <option value="Baseball">Baseball</option>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
            <option value="Soccer">Soccer</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Other">Other</option>
          </select>
          <label>Location</label>
          <input
            type='text'
            placeholder='Location'
            value={this.state.location}
            onChange={(e, value) => this.setState({ location: value })}
          />
          <label>Time</label>
          <input
            type='text'
            placeholder='Time'
            value={this.state.time}
            onChange={(e, value) => this.setState({ time: value })}
          />
          <button
            className='button'
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Sidebar;
