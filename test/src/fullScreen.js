import React, { Component } from "react";
import Fullscreen from "react-full-screen";
import './App.css';

class NyFullScreen extends Component {
  constructor(props) {
    super();
 
    this.state = {
      isFull: false,
    };
  }
 
  goFull = () => {
    this.setState({ isFull: true });
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={this.goFull}>
          Go Fullscreen
        </button>
 
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <div className="fullscreen-enabled my-component">
            Hi! This may cover the entire monitor.
            <div>FFFFFFFFFFFFFFFFFFFFF</div>
          </div>
        </Fullscreen>
      </div>
    );
  }
}
 
export default NyFullScreen;