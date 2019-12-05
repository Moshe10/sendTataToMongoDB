import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'antd';
import './projectBox.css';
import { timeBetweenTwoDatesInPercent, pointsDone, getAllPoints, dateDifference, startAndEndTimeProject, strDateToShowInBox } from './projectBoxTools';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeadphones, faMapMarkerAlt, faCalendarAlt, faDollarSign, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faHeadphones, faMapMarkerAlt, faCalendarAlt, faDollarSign);


class ProjectBox extends Component {

    render() {
        let TMproject = {
            start: { y: 2019, m: 8 - 1, d: 14 },
            end: { y: 2019, m: 8 - 1, d: 23 }
        }
        let totalWorkDaysForTMproject = dateDifference(TMproject.start, TMproject.end);
        let percentageOfTime = timeBetweenTwoDatesInPercent();
        let strDates = strDateToShowInBox();

        return (
            <div>
                <div className='card-copy-1' >
                    <div className='card-copy-2'>
                        <img alt=''
                            style={{
                                width: '120px',
                                height: '98px',
                                marginTop: '13px',
                                marginLeft: '110px',
                            }}
                            src='http://localhost:3008/iconfinder_Odoo_682681.png'></img>
                    </div>
                    <div className='project-name'>odoo</div>
                    <div className='type-text'>Type</div>
                    <div className='my-hr-line'></div>
                    <div className='info-rectangle-progress-bar'>
                        <Container>
                            <Row>
                                <Col md='4'>
                                    <div>start date</div>
                                    <div>{strDates.strStart}</div>
                                </Col>
                                <Col md='4'>
                                    <div className='div-progress-bar-1'>
                                        <Progress percent={percentageOfTime} size="small" />
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div>end date</div>
                                    <div>{strDates.strEnd}</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className='info-rectangle-progress-bar'>
                        <Container>
                            <Row>
                                <Col md='4'>
                                    <div>Effort done</div>
                                    <div>{300} Hours</div>
                                </Col>
                                <Col md='4'>
                                    <div className='div-progress-bar-2'>
                                        <Progress percent={70} size="small" />
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div>Yearly effort</div>
                                    <div>{1000} Hours</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* <div>
                        <FontAwesomeIcon style={{ marginLeft: '14px', marginTop: '16px', fontSize: '17px', color: 'gold' }} icon={faDollarSign} />
                        <div className='icon-text'>some text ...</div>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ marginLeft: '10px', marginTop: '16px', fontSize: '17px', color: '#022040' }} icon={faCalendarAlt} />
                        <div className='icon-text'>some text ...</div>
                    </div> */}
                    <div>
                        <FontAwesomeIcon style={{ marginLeft: '10px', marginTop: '16px', fontSize: '17px' }} icon={faHeadphones} />
                        <div className='icon-text'>team manager</div>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ marginLeft: '10px', marginTop: '16px', fontSize: '17px', color: '8f1717' }} icon={faMapMarkerAlt} />
                        <div className='icon-text'>location</div>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ marginLeft: '8px', marginTop: '16px', fontSize: '17px'}} icon={faTachometerAlt} />
                        <div className='icon-text'>status</div>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className='info-rectangle'>
                                    <div className='info-data'>Developers</div>
                                </div>
                            </Col>
                            <Col>
                                <div className='info-rectangle'>
                                    <div className='info-data'>Bench</div>
                                </div>
                            </Col>
                            <Col>
                                <div className='info-rectangle'>
                                    <div className='info-data'>Ninga</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default ProjectBox;