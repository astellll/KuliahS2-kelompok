import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

export default class ProfileFeedsComponent extends Component {
    render() {
        return (
            <Col style={{}}>
                <Row style={{ backgroundColor: '#FFFFFF', height: 150 }}><Label>User Page Pic</Label></Row>
                <Row style={{ height: 45 }}>
                    <Col size={1} style={{ backgroundColor: '#635DB7', marginTop: -30 }}><Label>User Profile Pic</Label></Col>
                    <Col size={2} style={{ marginTop: -30 }}>
                        <Row style={{ backgroundColor: "transparent", height: 30 }}>
                            <Label style={{ flex: 1, textAlign: 'right' }}>View</Label>
                        </Row>
                        <Row style={{ backgroundColor: "#00CE9F", height: 45 }}>
                            <Col>
                                <Row><Label>Name</Label></Row>
                                <Row><Label>♥xxx♥xxx♥xxx</Label></Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}
