import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, View, Footer, FooterTab, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class TrendingScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col>
                            <Image source={require('../assets/lion.jpg')}
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
                                <Image source={require('../assets/coffee.jpg')}
                                    style={{
                                        width: 180,
                                        height: 200
                                    }}>
                                </Image>
                            </Row>
                            <Row>
                                <Image source={require('../assets/cod.jpg')}
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
                                <Image source={require('../assets/flood.png')}
                                    style={{
                                        width: 180,
                                        height: 200
                                    }}>
                                </Image>
                            </Row>
                            <Row>
                                <Image source={require('../assets/presiden.jpg')}
                                    style={{
                                        width: 180,
                                        height: 200
                                    }}>
                                </Image>
                            </Row>
                        </Col>
                        <Col>
                            <Image source={require('../assets/fullmetal.jpg')}
                                style={{
                                    resizeMode: 'cover',
                                    height: 400,
                                    width: 180
                                }}
                            >
                            </Image>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
export default TrendingScreen;