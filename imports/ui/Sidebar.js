import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <h3>Add New Pickup Game</h3>
        <form className='sidebar__form'>
          <label>Event Name</label>
          <input type='text' />
          <label>Sport</label>
          <select>
            <option value="Baseball">Baseball</option>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
            <option value="Soccer">Soccer</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Other">Other</option>
          </select>
          <label>Location</label>
          <input type='text' />
          <label>Time</label>
          <input type='text' />
          <button className='button'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Sidebar
