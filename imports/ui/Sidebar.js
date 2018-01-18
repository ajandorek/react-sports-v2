import React, { Component } from 'react'

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <h3>Add New Pickup Game</h3>
        <form className='sidebar__form'>
          <label>Sport</label>
          <input />
          <label>Sport</label>
          <input />
          <label>Location</label>
          <input />
          <label>Time</label>
          <input />
          <button className='button'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Sidebar
