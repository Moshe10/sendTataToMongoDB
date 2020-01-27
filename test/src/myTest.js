import React, { Component } from 'react';
import './myTest.css';
import axios from 'axios';

let data = require('./data');

class MyTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnArr: ['a', 'b', 'c', 'd', 'e'],
            seconds: 0
        }
    }

    tick() {
        console.log('tick()...');
        
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      }

    componentDidMount() {
        console.log('componentDidMount...');
        
        // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
        // this.interval = setInterval(() => this.tick(), 5000);
    }
    componentWillMount() {
        // clearInterval(this.interval);
    }

    saveArr = [];

    slice(arr) {
        if (arr.length > 4) {
            let tempArr = arr.slice(0, 4);
            this.saveArr.push(tempArr);
            let newArr = arr.slice(4);
            if (newArr.length > 4) {
                this.slice(newArr);
            }
            if (newArr.length <= 4) {
                this.saveArr.push(newArr);
            }
        }
        if (arr.length <= 4) {
            this.saveArr.push(arr);
        }
        console.log("saveArr, ", this.saveArr);
    }

    async get() {
        // let info = await axios.get('https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=3448439&m=50&s=on');
        let info = await axios.get('https://www.hebcal.com/converter/?cfg=json&gy=2019&gm=11&gd=21&g2h=1');
        console.log('info, ', info);

    }

    myMath() {
        let full = 5;
        let allChecked = 3;
        let fatherChecked = allChecked / full * 100;
        let onePartOfAll = 1 / full * 100;
        let allChildren = 5;
        let allChildrenCheck = 5;
        let percentageOfChild = onePartOfAll * allChildrenCheck / allChildren;
        let total = fatherChecked + percentageOfChild;
    }

    buildOrderForWorkProcess(storedData) {
        let counter = 1;
        for (let i = 0; i < storedData.length; i++) {
            let element = storedData[i];
            if (element.children.length > 0) {
                storedData[i].order = counter;
                if (element.description === "" || element.description === "<p></p>") {
                    storedData.splice(i, 1)
                    i--
                }
                counter += 1;
                for (let g = 0; g < element.children.length; g++) {
                    storedData[i].children[g].order = counter;
                    if (element.children[g].description === "" || element.children[g].description === "<p></p>") {
                        storedData[i].children.splice(g, 1)
                        g--
                    }
                    counter += 1;
                }
            } else {
                storedData[i].order = counter;
                if (element.description === "" || element.description === "<p></p>") {
                    storedData.splice(i, 1)
                    i--
                }
                counter += 1;
            }
        }
        console.log('storedData, ', storedData);
    }

    deleteBtn(i) {
        console.log(i);
        let temp = this.state.btnArr;
        temp.splice(i, 1)
        this.setState({ btnArr: temp })
    }





    render() {

        let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let arr2 = [<div>1</div>, <div>2</div>, <div>3</div>];
        // this.slice(arr2);
        // console.log(data.work_process);
        this.buildOrderForWorkProcess(data.work_process);

        return (
            <div className='test'>
                {/* <button onClick={() => this.get()}>
                    get
                </button> */}
                {/* {this.state.btnArr.map((elm, i) => {
                    return (
                        <button onClick={() => this.deleteBtn(i)}>{elm}</button>
                    )
                })} */}
                {/* {this.state.time} */}
                {/* {this.state.seconds} */}
            </div>
        );
    }
}

export default MyTest;