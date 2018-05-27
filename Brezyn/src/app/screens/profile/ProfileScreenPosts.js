import React, { Component } from 'react';

import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, View, Footer, FooterTab, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class ProfileScreenPosts extends Component {
    render() {
        return (<View>
            <Grid>
                <Col>
                    <Image source={require('../../../assets/images/sample1.jpg')}
                        style={{
                            resizeMode: 'cover',
                            height: 400,
                            width: 180
                        }}
                    >
                    </Image>
                </Col>
                <Col>
                    <Row>
                        <Image source={require('../../../assets/images/sample2.jpg')}
                            style={{
                                width: 180,
                                height: 200
                            }}>
                        </Image>
                    </Row>
                    <Row>
                        <Image source={require('../../../assets/images/sample3.jpg')}
                            style={{
                                width: 180,
                                height: 200
                            }}>
                        </Image>
                    </Row>
                </Col>
            </Grid>
            <Grid>
                <Col>
                    <Row>
                        <Image source={require('../../../assets/images/sample4.jpg')}
                            style={{
                                width: 180,
                                height: 200
                            }}>
                        </Image>
                    </Row>
                    <Row>
                        <Image source={require('../../../assets/images/sample1.jpg')}
                            style={{
                                width: 180,
                                height: 200
                            }}>
                        </Image>
                    </Row>
                </Col>
                <Col>
                    <Image source={require('../../../assets/images/sample2.jpg')}
                        style={{
                            resizeMode: 'cover',
                            height: 400,
                            width: 180
                        }}
                    >
                    </Image>
                </Col>
            </Grid></View>
        );
    }
}
export default ProfileScreenPosts;