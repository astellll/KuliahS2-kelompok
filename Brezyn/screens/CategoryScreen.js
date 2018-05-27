import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, View, Footer, FooterTab, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class CategoryScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col>
                            <Card>
                                <CardItem cardBody>
                                    <ImageBackground source={require('../assets/health.jpg')}
                                        style={{
                                            height: 200,
                                            width: 200,
                                            paddingBottom: 200,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto',
                                                color: 'white',
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                bottom: 80,
                                                textAlign: 'center',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: { width: -1, height: 1 },
                                                textShadowRadius: 5
                                            }}
                                        >HEALTH
                          </Text>
                                    </ImageBackground>
                                </CardItem>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardItem cardBody>
                                    <ImageBackground source={require('../assets/jokes.jpg')}
                                        style={{
                                            height: 200,
                                            width: 200,
                                            paddingBottom: 200,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto',
                                                color: 'white',
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                bottom: 80,
                                                textAlign: 'center',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: { width: -1, height: 1 },
                                                textShadowRadius: 5
                                            }}
                                        >JOKES
                          </Text>
                                    </ImageBackground>
                                </CardItem>
                            </Card>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <Card>
                                <CardItem cardBody>
                                    <ImageBackground source={require('../assets/deadpool.jpg')}
                                        style={{
                                            height: 200,
                                            width: 200,
                                            paddingBottom: 200,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto',
                                                color: 'white',
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                bottom: 80,
                                                textAlign: 'center',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: { width: -1, height: 1 },
                                                textShadowRadius: 5
                                            }}
                                        >MOVIES
                          </Text>
                                    </ImageBackground>
                                </CardItem>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardItem cardBody>
                                    <ImageBackground source={require('../assets/promo.jpg')}
                                        style={{
                                            height: 200,
                                            width: 200,
                                            paddingBottom: 200,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto',
                                                color: 'white',
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                bottom: 80,
                                                textAlign: 'center',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: { width: -1, height: 1 },
                                                textShadowRadius: 20
                                            }}
                                        >LIFESTYLE
                          </Text>
                                    </ImageBackground>
                                </CardItem>
                            </Card>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <Card>
                                <CardItem cardBody>
                                    <ImageBackground source={require('../assets/technology.jpg')}
                                        style={{
                                            height: 200,
                                            width: 200,
                                            paddingBottom: 200,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto',
                                                color: 'white',
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                bottom: 80,
                                                textAlign: 'center',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: { width: -1, height: 1 },
                                                textShadowRadius: 5
                                            }}
                                        >TECHNOLOGY
                          </Text>
                                    </ImageBackground>
                                </CardItem>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardItem cardBody>
                                    <ImageBackground source={require('../assets/startup.png')}
                                        style={{
                                            height: 200,
                                            width: 200,
                                            paddingBottom: 200,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto',
                                                color: 'white',
                                                position: 'absolute',
                                                alignSelf: 'center',
                                                bottom: 80,
                                                textAlign: 'center',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: { width: -1, height: 1 },
                                                textShadowRadius: 20
                                            }}
                                        >STARTUP
                          </Text>
                                    </ImageBackground>
                                </CardItem>
                            </Card>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
export default CategoryScreen;