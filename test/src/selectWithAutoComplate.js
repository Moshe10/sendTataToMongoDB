import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    nameToFilter:'',
    openSelect:false
  }
  devs = [
    {
        name: "Moshe Beeri", _id:1
    },
    {
        name: "Eliyaou Amzaleg", _id:2
    },
    {
        name: "Avi Doitch", _id:3
    },
    {
        name: "Michel Berelejis", _id:4
    },
    {
        name: "Shlomo Ferber", _id:5
    },
    {
        name: "Elazar Ben Porat", _id:6
    },
    {
        name: "Kuti Wiss", _id:7
    },
    {
        name: "Natan Choen", _id:8
    },
    {
        name: "David Doitsh", _id:9
    },
    {
        name: "Yuda Aloni", _id:10
    },
]
  
  hendleChange(e){
    let name = e.target.value;
    name = name.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    console.log(name);
    this.setState({nameToFilter:name});
  }

  devsArrayafterFilter = () => {
    console.log('devsArrayafterFilter');
    
    let devsAfterFilter = this.devs.filter((dev) => dev.name.startsWith(this.state.nameToFilter))
    console.log(devsAfterFilter);
    return <div>
      {
        devsAfterFilter.map((dev,index) => {
          console.log('map');
            return (
              <ListGroupItem key={index} tag="button" action>{dev.name}</ListGroupItem>
            )
          })
      }
    </div>
  }
  hndleClick(){
    this.setState({nameToFilter:''})
  }



  render() {
    return (
      <div className="App">
      <Button id="PopoverLegacy" type="button" onClick={ () => this.hndleClick()}>
        Select Developer
      </Button>
      <UncontrolledPopover trigger="legacy" placement="bottom" target={'PopoverLegacy'}>
        <PopoverHeader><div className="text-center">Select Developers</div></PopoverHeader>
        <PopoverHeader><Input type="text" id="exampleSelect" onChange={(e) => this.hendleChange(e)} /></PopoverHeader>
        <PopoverBody>
          <div style={{overflow:'scroll', height:'300px'}}>
            <ListGroup>
              {this.state.nameToFilter === '' ? this.devs.map((dev,index) => {
                    return (
                <ListGroupItem key={index} tag="button" action>{dev.name}</ListGroupItem>
                )
              }) : this.devsArrayafterFilter() }
            </ListGroup>
          </div>
        </PopoverBody>
      </UncontrolledPopover>
      </div>
    );
  }
}

export default App;
