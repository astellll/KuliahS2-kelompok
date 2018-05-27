import React, { Component } from 'react';

import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, View, Footer, FooterTab, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ProfileScreenWith extends Component {
    render() {
        return (<View>
            <Grid>

                <Col>
                    <Row style={{ backgroundColor: '#FFFFFF', height: 420 }}>
                        <Image style={{ flex: 1, width: '100%', height: 'auto', resizeMode: 'stretch' }} source={require('../../../assets/images/under-construction.jpg')} />
                    </Row>
                </Col>
                {/* <Col>
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
                </Col> */}
            </Grid>
        </View>
        );
    }
}