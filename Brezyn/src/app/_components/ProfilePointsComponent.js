import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

export default class ProfilePointsComponent extends Component {
    render() {
        return (
            <Col style={{margin:15}}>
                <Row style={{ backgroundColor: '#FFFFFF', height: 60, paddingTop: 30 }}><Label>label#1</Label></Row>
                <Row style={{ height: 60 }}>
                    <Col>                    
                        <Row style={{ backgroundColor: '#635DB7' }} ><Label>Achievement</Label></Row>
                        <Row style={{ backgroundColor: '#00CE9F' }}><Label>Achievement</Label></Row>
                    </Col>
                    <Col>                    
                        <Row style={{ backgroundColor: '#00CE9F' }}><Label>Achievement</Label></Row>
                        <Row style={{ backgroundColor: '#635DB7' }}><Label>Achievement</Label></Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}
