import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

export default class ProfileHeaderComponent extends Component {
    render() {
        return (
            <Grid>
                {/* TODO change height to size later */}
                <Row style={{ height: 60 }}>
                    <Col style={{ backgroundColor: '#635DB7' }}><Label>Username</Label></Col>
                    <Col style={{ backgroundColor: '#00CE9F' }}>
                        {/* TODO change to icon and add router later */}
                        <Label>Icon Analytics</Label>
                        <Label>Icon Setting</Label>
                    </Col>
                </Row>
                <Row style={{ height: 255 }}>
                    <Col>
                        <Row style={{ backgroundColor: '#FFFFFF', height: 195 }}><Label>User Page Pic</Label></Row>
                        <Row style={{ height: 60 }}>
                            <Col style={{ backgroundColor: '#635DB7', marginTop: -45 }}><Label>User Profile Pic</Label></Col>
                            <Col style={{ backgroundColor: '#00CE9F' }}>
                                <Label>Number</Label>
                                <Label>Following</Label>
                            </Col>
                            <Col style={{ backgroundColor: '#635DB7' }}>
                                <Label>Number</Label>
                                <Label>Follower</Label>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#FFFFFF', height: 120 }}>
                    <Label>Detail</Label>
                </Row>
            </Grid>
        );
    }
}
