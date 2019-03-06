import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

let data = require('./data');

class App extends Component {

  sendData(){
    console.log(data);
    
    axios.post('http://10.2.3.115:3030/test/planner/startPlanning', data.project ).then((req, res) => {
      console.log(req);
      
    })
  }

  render() {
    return (
      <div>
       <button onClick={() => this.sendData()}>send data</button>
      </div>
    );
  }
}

export default App;
