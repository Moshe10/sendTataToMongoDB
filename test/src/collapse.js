import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card,ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyCollapse extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    onclick(){
        console.log(this.state.collapse);
        this.setState({})
        
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem onClick={()=>{this.onclick()}} action tag="button" >Cras justo odio</ListGroupItem>
                                <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
                                <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
                                <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default MyCollapse;