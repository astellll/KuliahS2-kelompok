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
import ProfileRankComponent from '../../_components/ProfileRankComponent'

export default class ProfileScreenRanks extends Component {
    render() {
        return (
            <View>
                <Grid>
                    {/* <ProfileHeaderComponent/> */}
                    {/* <ProfileTabPaneComponent /> */}
                    {/* TODO select from database later */}
                    <Row style={{ marginLeft: 15, marginTop: 15, backgroundColor: '#FFFFFF', height: 60 }}>
                    <Col size={2} style={{ backgroundColor: '#FFFFFF'}}>
                    <Label>Level</Label>
                    </Col>
                    <Col size={1} style={{ backgroundColor: '#FFFFFF'}}>
                    <Icon style={{ textAlign: 'center', color: 'black' }} name='camera' />
                    </Col>
                    <Col size={1} style={{ backgroundColor: '#FFFFFF'}}>
                    <Icon style={{ textAlign: 'center', color: 'black' }} name='beer' />
                    </Col>
                    <Col size={1} style={{ backgroundColor: '#FFFFFF'}}>
                    <Icon style={{ textAlign: 'center', color: 'black' }} name='star' />
                    </Col>
                    </Row>
                    
                    {/* loop @_@ */}
                    <ProfileRankComponent/>

                </Grid>
            </View>
        );
    }
}
