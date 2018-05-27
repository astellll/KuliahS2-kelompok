import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, View, Footer, FooterTab, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class FeedsScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
              <Card>
                <CardItem cardBody>
                  <ImageBackground source={require('../assets/avanger.jpg')} style={{ height: 200, width: null, flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: 'white',
                        position: 'absolute',
                        bottom: 10,
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 5
                      }}
                    >Who died in Avengers: Infinity War and what are their chances of coming back?
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
                  <ImageBackground source={require('../assets/cookie.jpg')}
                    style={{
                      height: 200,
                      width: 200,
                      paddingBottom: 200,
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: 'white',
                        position: 'absolute',
                        bottom: 10,
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 5
                      }}
                    >Ultimate Chocolate Chip Cookies Recipe - BettyCrocker.com
                          </Text>
                  </ImageBackground>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem cardBody>
                  <ImageBackground source={require('../assets/travel.jpg')}
                    style={{
                      height: 200,
                      width: 200,
                      paddingBottom: 200,
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: 'white',
                        position: 'absolute',
                        bottom: 10,
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 5
                      }}
                    >15 reasons why Indonesia should be your next holiday destination
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
                  <ImageBackground source={require('../assets/culture.jpg')}
                    style={{
                      height: 200,
                      width: 200,
                      paddingBottom: 200,
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: 'white',
                        position: 'absolute',
                        bottom: 10,
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 5
                      }}
                    >Indonesian tribe: Batak Is One Of The Ethnic Groups In Indonesia
                          </Text>
                  </ImageBackground>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem cardBody>
                  <ImageBackground source={require('../assets/robot.jpeg')}
                    style={{
                      height: 200,
                      width: 200,
                      paddingBottom: 200,
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        color: 'white',
                        position: 'absolute',
                        bottom: 10,
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 5
                      }}
                    >Netflix Is Concerned the Internet Thinks the ‘Lost in Space’ Robot Is Hot: ‘Ya’ll Need Jesus’ — Watch
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
export default FeedsScreen;