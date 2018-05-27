import React, { Component } from "react";
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
  Body
} from "native-base";

class HeaderComponent extends Component {
  render() {
    return (
      <Header hasTabs>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>GueKeren</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
          <Button transparent>
            <Icon name='heart' />
          </Button>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HeaderComponent;