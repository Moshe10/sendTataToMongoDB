import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Col} from 'reactstrap'
class Validation extends Component {

    click(e) {
        console.log(e.target.value);

    }

    date(e) {
        let d = e.target.value
        console.log(d);
        let date = new Date(d)
        console.log(date);

    }

    // This function calculates how many days have passed since the project started.
    calcDate() {

        // let timeArr = StartDate.createWeeks(this.props.projectFromDB.projectLength, new Date(this.props.projectFromDB.startDate));
        // let splitStart = timeArr[0][0].split('/');
        // let startDate = new Date(splitStart[1] + "/" + splitStart[0] + "/" + splitStart[2]);
        // let oneDay = 24*60*60*1000;
        // let diffDays = Math.round(Math.abs((startDate.getTime() - new Date())/(oneDay)));
        // console.log(diffDays);
        
    }

    render() {
        return (
            <div>
                <AvForm>
                    <AvField type="select" name="select" label="Option" required={true} helpMessage="Idk, this is an example. Deal with it!">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </AvField>
                    <AvField onChange={(e) => this.date(e)} name="date" label="Date" type="date" required={true} />
                    <AvField onChange={(e) => this.click(e)} name="maxPropNumberProp" label="enter sprint length" type="number" validate={{ max: { value: 10 }, min: { value: 1 }, required: { value: true }, }} />
                </AvForm>
                <Col sm='1'><Button color="info" onClick={() => this.calcDate()}>days</Button></Col>
            </div>
        );
    }
}

export default Validation;