import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Tabs,
    Tab,
    Right,
    Left,
    Body,
    Label
} from "native-base";
import ProfileHeaderComponent from '../../_components/ProfileHeaderComponent'
import ProfileTabPaneComponent from '../../_components/ProfileTabPaneComponent'
import ProfilePointsComponent from '../../_components/ProfilePointsComponent'

export default class ProfileScreenMyFeeds extends Component {
    render() {
        return (
            <View>
                <Grid>
                    {/* <ProfileHeaderComponent/> */}
                    {/* <ProfileTabPaneComponent /> */}
                    {/* TODO select from database later */}
                    <Row style={{ margin: 15, backgroundColor: '#FFFFFF', height: 60 }}>
                        <Label>Achievement Level : </Label>
                        <Label>Tester</Label>
                    </Row>
                    <Row style={{ height: 60 }}>
                        <Col style={{ backgroundColor: '#FFFFFF' }}>
                        <Icon style={{ textAlign: 'center', color: 'black' }} name='camera' />
                        <Label style={{ textAlign: 'center'}} >546</Label>
                        
                        </Col>
                        <Col style={{ backgroundColor: '#FFFFFF' }}>
                        <Icon style={{ textAlign: 'center', color: 'black' }} name='beer' />
                        <Label style={{ textAlign: 'center'}} >173</Label>
                        
                        </Col>
                        <Col style={{ backgroundColor: '#FFFFFF' }}>
                        <Icon style={{textAlign: 'center',  color: 'black' }} name='star' />
                        <Label style={{ textAlign: 'center'}} >151</Label>
                        
                        </Col>
                    </Row>

                    <ProfilePointsComponent/>
                    <ProfilePointsComponent/>
                    <ProfilePointsComponent/>

                </Grid>
            </View>
        );
    }
}
