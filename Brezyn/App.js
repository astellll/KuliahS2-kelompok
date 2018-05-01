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
import { Container, Header, Footer, Content, Form, Item, Input, Label } from 'native-base';

// import ProfileScreen from './src/app/screens/profile/ProfileScreen';
// import ProfileScreenAnalytics from './src/app/screens/profile/ProfileScreenAnalytics';
// import ProfileScreenEdit from './src/app/screens/profile/ProfileScreenEdit';
import ProfileScreenMyFeeds from './src/app/screens/profile/ProfileScreenMyFeeds';
// import ProfileScreenMyPoints from './src/app/screens/profile/ProfileScreenMyPoints';
// import ProfileScreenPosts from './src/app/screens/profile/ProfileScreenPosts';
// import ProfileScreenRanks from './src/app/screens/profile/ProfileScreenRanks';
// import ProfileScreenSetting from './src/app/screens/profile/ProfileScreenSetting';
// import ProfileScreenWith from './src/app/screens/profile/ProfileScreenWith';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component/*<Props>*/ {
  render() {
    return (
      //100% conflix kalo ga sementara dipisah 
      //TODO sabtu kita bahas merging ini
      //how to used: comment semua yang tidak diperlukan

      // ########################### YOSEP SECTION ########################### //
      <Container>     
        {/* <Header /> */}
        <Content>
          {/* TODO content dynamic by footer later */}          
          {/* <ProfileScreen/> */}
          {/* <ProfileScreenAnalytics/> */}
          {/* <ProfileScreenEdit/> */}
          <ProfileScreenMyFeeds/>
          {/* <ProfileScreenMyPoints/> */}
          {/* <ProfileScreenPosts/> */}
          {/* <ProfileScreenRanks/> */}
          {/* <ProfileScreenSetting/> */}
          {/* <ProfileScreenWith/>  */}
          
        </Content>
        {/* <Footer /> */}
      </Container>

      // ########################### RICHAD SECTION ########################### //
      // <Container>
      //   <Content>
      //   <View>
      //   <Image
      //     style={{width: 50, height: 50}}
      //     source={require('./assets/google.png')}
      //   />
      //   </View>
      //     <Form>
      //       <Item floatingLabel>
      //         <Label>Username</Label>
      //         <Input />
      //       </Item>
      //       <Item floatingLabel last>
      //         <Label>Password</Label>
      //         <Input />
      //       </Item>
      //     </Form>
      //   </Content>
      // </Container>
    );
  }
}
