import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

// temporary class
export default class ProfileTabPaneComponent extends Component {
    render() {
        return (
            <Grid>
                {/* TODO change to tab-pane and add router later */}
                <Row style={{ height: 60 }}>
                    <Col style={{ backgroundColor: '#635DB7' }}><Label>Post</Label></Col>
                    <Col style={{ backgroundColor: '#00CE9F' }}><Label>MyFeeds</Label></Col>
                    <Col style={{ backgroundColor: '#635DB7' }}><Label>MyPoints</Label></Col>
                    <Col style={{ backgroundColor: '#00CE9F' }}><Label>With</Label></Col>
                </Row>
                {/* <Row style={{ backgroundColor: '#FFFFFF', height: 120 }}>
                    <Label>Tab-Pane Content</Label>
                </Row> */}
            </Grid>
        );
    }
}
