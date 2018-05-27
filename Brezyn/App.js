/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
} from 'react-native';
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
  Body,
  Content,
  Footer,
  FooterTab
} from "native-base";
import ProfileScreen from './src/app/screens/profile/ProfileScreen';
// import ProfileScreenAnalytics from './src/app/screens/profile/ProfileScreenAnalytics';
// import ProfileScreenEdit from './src/app/screens/profile/ProfileScreenEdit';
// import ProfileScreenMyFeeds from './src/app/screens/profile/ProfileScreenMyFeeds';
// import ProfileScreenMyPoints from './src/app/screens/profile/ProfileScreenMyPoints';
// import ProfileScreenPosts from './src/app/screens/profile/ProfileScreenPosts';
// import ProfileScreenRanks from './src/app/screens/profile/ProfileScreenRanks';
// import ProfileScreenSetting from './src/app/screens/profile/ProfileScreenSetting';
// import ProfileScreenWith from './src/app/screens/profile/ProfileScreenWith';

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RecentScreen from "./screens/RecentScreen";
import FeedsScreen from "./screens/FeedsScreen";
import TrendingScreen from "./screens/TrendingScreen";
import CategoryScreen from "./screens/CategoryScreen";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
class App extends Component/*<Props>*/ {
  render() {
    return (
      //100% conflix kalo ga sementara dipisah 
      //TODO sabtu kita bahas merging ini
      //how to used: comment semua yang tidak diperlukan

      // ########################### YOSEP SECTION ########################### //
      // <Container>     
      //   {/* <Header /> */}
      //   <Content>
      //     {/* TODO content dynamic by footer later */}          
      //     {/* <ProfileScreen/> */}
      //     {/* <ProfileScreenAnalytics/> */}
      //     {/* <ProfileScreenEdit/> */}
      //     {/* <ProfileScreenMyFeeds/> */}
      //     <ProfileScreenMyPoints/>
      //     {/* <ProfileScreenPosts/> */}
      //     {/* <ProfileScreenRanks/> */}
      //     {/* <ProfileScreenSetting/> */}
      //     {/* <ProfileScreenWith/>  */}

      //   </Content>
      //   {/* <Footer /> */}
      // </Container>

      // ########################### RICHAD SECTION ########################### //
      <Container>
        <Content>
          <HeaderComponent />
          <Tabs>
            <Tab heading="Recent">
              <RecentScreen />
            </Tab>
            <Tab heading="Trending">
              <FeedsScreen />
            </Tab>
            <Tab heading="Hype">
              <TrendingScreen />
            </Tab>
            <Tab heading="Category">
              <CategoryScreen />
            </Tab>
            <Tab heading="Profile">
              <ProfileScreen />
            </Tab>
          </Tabs>
        </Content>
        <FooterComponent />
      </Container>
    );
  }
}

export default App;