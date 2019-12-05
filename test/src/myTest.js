import React, { Component } from 'react';
import './myTest.css';
import { Row, Col } from 'antd';
import axios from 'axios';

class MyTest extends Component {

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

    render() {
        let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let arr2 = [<div>1</div>,<div>2</div>,<div>3</div>];
        this.slice(arr2);


        return (
            <div className='test'>
                <button onClick={() => this.get()}>
                    get
                </button>
            </div>
        );
    }
}

export default MyTest;