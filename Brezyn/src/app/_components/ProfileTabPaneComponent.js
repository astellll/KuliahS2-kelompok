import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';
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
    Content,
    Footer,
    FooterTab
  } from "native-base";

import ProfileScreenMyFeeds from '../screens/profile/ProfileScreenMyFeeds';
import ProfileScreenPosts from '../screens/profile/ProfileScreenPosts';
import ProfileScreenMyPoints from '../screens/profile/ProfileScreenMyPoints';
import ProfileScreenWith from '../screens/profile/ProfileScreenWith';
import ProfileScreenRanks from '../screens/profile/ProfileScreenRanks';
import ProfileScreenAnalytics from '../screens/profile/ProfileScreenAnalytics';

// temporary class
export default class ProfileTabPaneComponent extends Component {
    render() {
        return (
            // <Grid>
            //     {/* TODO change to tab-pane and add router later */}
            //     <Row style={{ height: 60 }}>
            //         <Col style={{ backgroundColor: '#635DB7' }}><Label>Post</Label></Col>
            //         <Col style={{ backgroundColor: '#00CE9F' }}><Label>MyFeeds</Label></Col>
            //         <Col style={{ backgroundColor: '#635DB7' }}><Label>MyPoints</Label></Col>
            //         <Col style={{ backgroundColor: '#00CE9F' }}><Label>With</Label></Col>
            //     </Row>
            //     {/* <Row style={{ backgroundColor: '#FFFFFF', height: 120 }}>
            //         <Label>Tab-Pane Content</Label>
            //     </Row> */}
            // </Grid>
            <Tabs>
                <Tab heading="Post">
                <ProfileScreenPosts />
                </Tab>
                <Tab heading="MyFeeds">
                <ProfileScreenMyFeeds />
                </Tab>
                <Tab heading="MyPoints">
                <ProfileScreenMyPoints />
                </Tab>
                <Tab heading="With">
                <ProfileScreenWith />
                
                </Tab>
                <Tab heading="Analytic">
                <ProfileScreenAnalytics />
                
                </Tab>
                <Tab heading="Rank">
                <ProfileScreenRanks />
                
                </Tab>
            </Tabs>
        );
    }
}
