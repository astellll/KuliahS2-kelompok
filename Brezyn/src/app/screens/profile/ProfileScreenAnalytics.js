import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, Card, CardItem, Text, Body, Left, Thumbnail, Button, Icon, Right, Label } from "native-base";
import { Image } from "react-native";
import ProfileHeaderComponent from '../../_components/ProfileHeaderComponent'
import ProfileTabPaneComponent from '../../_components/ProfileTabPaneComponent'

export default class ProfileScreenAnalytics extends Component {
    render() {
        // const uri = "../../../../../assets/chris_evan.jpg";
        return (
            <View>
                <Grid>
                    <Row style={{ height: 120 }}>
                        <Col>
                            <Row style={{ height: 120 }}>
                                {/* <Col style={{ backgroundColor: '#635DB7', marginTop: -45 }}><Label>User Profile Pic</Label></Col> */}
                                <Col size={4} style={{ backgroundColor: 'transparent' }}>
                                    <Thumbnail style={{ borderColor: 'white', borderWidth: 5, height: 90, width: 90, borderRadius: 45, margin: 15 }} source={require('../../../../assets/chris_evan.jpg')} />

                                </Col>

                                <Col size={8} style={{ backgroundColor: 'transparent', paddingTop: 20 }}>
                                    <Label style={{ textAlign: 'left' }}>Jane Olivia</Label>
                                    <Label style={{ textAlign: 'left' }}>200.000 Followers</Label>
                                    <Label style={{ textAlign: 'left' }}>Level : tester</Label>
                                    <Label style={{ textAlign: 'left' }}>Specialist: Food & Beverage</Label>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* masih hard code */}
                    <Row style={{ justifyContent: 'center', alignItems: 'center',  backgroundColor: '#FFFFFF', height: 100 }}>
                        <Col size={4}  >
                        
                        <Icon style={{ textAlign: 'center', color: 'black' }} name='camera' />


                        </Col>
                        <Col size={8} style={{paddingLeft: 10}} >
                            <Label style={{ fontWeight: "bold" }}>Activity</Label>
                            <Label>Post : 250 Post</Label>
                            <Label style={{ color: 'blue' }}>View Points >>></Label>

                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', height: 100 }}>
                        <Col size={4} >
                        <Icon style={{ textAlign: 'center', color: 'black' }} name='beer' />


                        </Col>
                        <Col size={8} style={{paddingLeft: 10}}>
                            <Label style={{ fontWeight: "bold" }}>Feeds</Label>
                            <Label>Post : 12 Post</Label>
                            <Label style={{ color: 'blue' }}>View Points >>></Label>

                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', height: 100 }}>
                        <Col size={4} >
                        <Icon style={{ textAlign: 'center', color: 'black' }} name='star' />


                        </Col>
                        <Col size={8} style={{paddingLeft: 10}} >
                            <Label style={{ fontWeight: "bold" }}>Reviews</Label>
                            <Label>Post : 221 Post</Label>
                            <Label style={{ color: 'blue' }}>View Points >>></Label>

                        </Col>
                    </Row>
                </Grid>
            </View>

        );
    }
}
