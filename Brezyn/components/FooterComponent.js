import React, { Component } from "react";
import {
  Container,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  Footer,
  FooterTab
} from "native-base";

class FooterComponent extends Component {
  render() {
    return (
        <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterComponent;