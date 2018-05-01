import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

import ProfileHeaderComponent from '../../_components/ProfileHeaderComponent'
import ProfileTabPaneComponent from '../../_components/ProfileTabPaneComponent'

export default class ProfileScreenMyFeeds extends Component {
    render() {
        return (
            <View>
                <Grid>
                    {/* <ProfileHeaderComponent/> */}
                    <ProfileTabPaneComponent/>
                    {/* TODO select from database later */}
                    
                </Grid>
            </View>
        );
    }
}
