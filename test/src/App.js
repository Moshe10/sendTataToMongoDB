import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Collapse from './collapse';
import MySelect from './select';
import Validation from './Validation';
import Modals from './modals';
import NyFullScreen from './fullScreen';
import ProjectBox from './projectBox';
import MyTest from './myTest';
// let data = require('./data');

class App extends Component {

  // sendData(){
  //   // console.log(data);
    
  //   axios.post('http://10.2.3.115:3030/test/planner/startPlanning', data.project ).then((req, res) => {
  //     console.log(req);
      
  //   })
  // }

  str(str){
    // let check = str.endsWith("_bugs");
    // console.log(check);
    
  }

  render() {
    // this.str('_bugs');
    return (
      <div>
       {/* <button onClick={() => this.sendData()}>send data</button> */}
       {/* <Collapse/> */}
       {/* <MySelect/> */}
       {/* <Validation/> */}
        {/* <Modals/> */}
        {/* <NyFullScreen/> */}
        {/* <ProjectBox/> */}
        <MyTest/>
      </div>
    );
  }
}

export default App;
