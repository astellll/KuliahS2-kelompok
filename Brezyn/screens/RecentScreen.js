import React, { Component } from "react";
import { Image } from "react-native";
import { Content, Card, CardItem, Text, Body, Left, Thumbnail, Button, Icon, Right } from "native-base";

class RecentScreen extends Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem cardBody>
            <Image source={require('../assets/scenary_one.jpg')} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/chris_evan.jpg')} />
              <Body>
                <Text>Richard Sitorus</Text>
                <Text note>What a beautiful scenary !</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>

        <Card>
          <CardItem cardBody>
            <Image source={require('../assets/scenary_two.jpg')} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail source={require('../assets/black_widow.jpg')} />
              <Body>
                <Text>Amanda Seyfried</Text>
                <Text note>Earth's Treasure ! Lovely !</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
export default RecentScreen;