import React, { Component } from 'react'

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }, () => console.log(this.state))
    //   err => console.log(err)
    );
    // console.log(this.state.latitude)
  }

  render() {
    // console.log(this.state);
      
    return (
      <div>
        <button onClick={this.position} className='Filter'>Filter</button>
      </div>
    );
  }
}

export default Location;