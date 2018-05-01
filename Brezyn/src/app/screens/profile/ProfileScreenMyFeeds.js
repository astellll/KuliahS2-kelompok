import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

import ProfileHeaderComponent from '../../_components/ProfileHeaderComponent'
import ProfileTabPaneComponent from '../../_components/ProfileTabPaneComponent'
import ProfileFeedsComponent from '../../_components/ProfileFeedsComponent'

export default class ProfileScreenMyFeeds extends Component {
    render() {
        return (
            <View>
                <Grid>
                    {/* <ProfileHeaderComponent/> */}
                    <ProfileTabPaneComponent/>
                    {/* TODO select from database later */}
                    {/* test */}
                    <Row style={{}}>
                        <Col style={{}}>
                            <Row style={{ backgroundColor: '#FFFFFF', height: 150 }}>
                                <Image style={{ flex: 1, width: '100%', height: 'auto', resizeMode: 'cover' }} source={require('../../../assets/images/sample1.jpg')} />
                            </Row>
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
                        <Col style={{}}>
                            <Row style={{ backgroundColor: '#FFFFFF', height: 150 }}>
                                <Image style={{ flex: 1, width: '100%', height: 'auto', resizeMode: 'cover' }} source={require('../../../assets/images/sample2.jpg')} />
                            </Row>
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
                    </Row>
                    <Row style={{}}>
                        <Col style={{}}>
                            <Row style={{ backgroundColor: '#FFFFFF', height: 150 }}>
                                <Image style={{ flex: 1, width: '100%', height: 'auto', resizeMode: 'cover' }} source={require('../../../assets/images/sample3.jpg')} />
                            </Row>
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
                        <Col style={{}}>
                            <Row style={{ backgroundColor: '#FFFFFF', height: 150 }}>
                                <Image style={{ flex: 1, width: '100%', height: 'auto', resizeMode: 'cover' }} source={require('../../../assets/images/sample4.jpg')} />
                            </Row>
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
                    </Row>
                    <Row style={{}}>
                        <ProfileFeedsComponent />
                        <ProfileFeedsComponent />
                    </Row>
                </Grid>
            </View>
        );
    }
}
