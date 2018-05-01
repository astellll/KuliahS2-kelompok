import React, { Component } from 'react';
import { View } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Label } from 'native-base';

import ProfileHeaderComponent from '../../_components/ProfileHeaderComponent'
import ProfileTabPaneComponent from '../../_components/ProfileTabPaneComponent'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View>
                <ProfileHeaderComponent/>
                <ProfileTabPaneComponent/>
            </View>
        );
    }
}
