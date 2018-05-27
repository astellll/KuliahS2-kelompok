import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

export default class ProfileRankComponent extends Component {
    render() {
        return (
            <View>
            <Row  style={{ marginTop: 5, marginLeft: 5, backgroundColor: '#FFFFFF', height: 30 }}>
                <Col size={2} style={{ backgroundColor: '#FFFFFF' }}>
                    <Label style={{fontWeight: "bold"}}>Activity</Label>
                </Col>
                <Col size={3} style={{ backgroundColor: '#FFFFFF' }}>
                </Col>
            </Row>
            <Row style={{ marginLeft: 15, backgroundColor: '#FFFFFF', height: 30 }}>
                <Col size={2} style={{ backgroundColor: '#FFFFFF' }}>
                    <Label>Traveler</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>500</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>50</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>25</Label>
                </Col>
            </Row>
            <Row style={{ marginLeft: 15, backgroundColor: '#FFFFFF', height: 50 }}>
                <Col size={2} style={{ backgroundColor: '#FFFFFF' }}>
                    <Label>Advanced Traveler</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>5000</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>300</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>300</Label>
                </Col>
            </Row>
            <Row style={{ marginLeft: 15, backgroundColor: '#FFFFFF', height: 30 }}>
                <Col size={2} style={{ backgroundColor: '#FFFFFF' }}>
                    <Label>Senior Traveler</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>75k</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>600</Label>
                </Col>
                <Col size={1} style={{ backgroundColor: '#FFFFFF' }}>
                <Label>400</Label>
                </Col>
            </Row>
            </View>
        );
    }
}
