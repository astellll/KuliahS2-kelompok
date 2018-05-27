import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, Card, CardItem, Text, Body, Left, Thumbnail, Button, Icon, Right, Label } from "native-base";
import { Image } from "react-native";
import ProfileHeaderComponent from '../../_components/ProfileHeaderComponent'
import ProfileTabPaneComponent from '../../_components/ProfileTabPaneComponent'

export default class ProfileScreen extends Component {
    render() {
        // const uri = "../../../../../assets/chris_evan.jpg";
        return (
            <View>

                <ProfileHeaderComponent />
                <Grid>
                    <Row style={{ height: 255 }}>
                        <Col>
                            <Row style={{ backgroundColor: '#FFFFFF', height: 195 }}>
                                <Image source={require('../../../../assets/scenary_one.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </Row>
                            <Row style={{ height: 60 }}>
                                {/* <Col style={{ backgroundColor: '#635DB7', marginTop: -45 }}><Label>User Profile Pic</Label></Col> */}
                                <Col style={{ backgroundColor: 'transparent', marginTop: -45 }}>
                                    <Thumbnail style={{borderColor:'white', borderWidth: 5, height:90, width:90, borderRadius:45, margin: 15}} source={require('../../../../assets/chris_evan.jpg')} />
                                    
                                </Col>

                                <Col style={{ backgroundColor: 'transparent', paddingTop: 10 }}>
                                    <Label style={{textAlign: 'center'}}>178</Label>
                                    <Label style={{textAlign: 'center'}}>Following</Label>
                                </Col>
                                <Col style={{ backgroundColor: 'transparent', paddingTop: 10 }}>
                                    <Label style={{textAlign: 'center'}}>200k</Label>
                                    <Label style={{textAlign: 'center'}}>Follower</Label>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ backgroundColor: '#FFFFFF', height: 120 }}>
                    <Col> 
                        <Label style={{fontWeight: "bold"}}>Jane Olivia Dicksen</Label>
                        <Label>Life is just a piece of cake for those who knows the ingredients</Label>
                        <Label style={{textDecorationLine: "underline", color:'blue'}}>www.JanesBlog.com</Label>
                        
                        </Col>
                    </Row>
                </Grid>
                <ProfileTabPaneComponent />
            </View>

        );
    }
}
