import React from 'react';
import { processColor, StyleSheet, Text, View, WebView, TouchableOpacity, AppRegistry } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

var HOME_URL = 'https://empcomm-agcommunity.cs68.force.com/agcoemployee/s/';
var GLOBAL = 'https://empcomm-agcommunity.cs68.force.com/agcoemployee/s/topic/0TO1D00000016jbWAA/global?tabset-f24a2=2';
var SOCIAL = 'https://empcomm-agcommunity.cs68.force.com/agcoemployee/s/group/CollaborationGroup/Recent';
var WEB_URL = 'https://agcocorp--empcomm.cs68.my.salesforce.com//servlet/networks/session/create?url=%2Fagcoemployee%2Fs%2F&site=0DM1D0000004CWD&refURL=http%3A%2F%2Fempcomm-agcommunity.cs68.force.com%2Fagcoemployee%2Flogin&inst=1D'

export default class App extends React.Component {
  state = {
   key: 1
 };

 resetWebViewToInitialUrl = () => {
   this.setState({
     key: this.state.key + 1
   });
 };
  render() {

    return (
          <View style={{ flex: 1 }}>
          <WebView
            style={{flex: 1}}
            key={ this.state.key }
            source={{uri: WEB_URL}}
            />
          <BottomNavigation
            labelColor="black"
            rippleColor="black"
            shifting={false}
            style={styles.bottomNavigation}
          >
            <Tab
              barBackgroundColor="#E8E8E8"
              label="Home"
              onPress={this.navHome.bind(this)}
              icon={<Icon size={24} color="#AE132A" name="home" />}
            />
            <Tab
              barBackgroundColor="#E8E8E8"
              label="News"
              onPress={this.navNews.bind(this)}
              icon={<Icon size={24} color="#AE132A" name="import-contacts" />}
            />
            <Tab
              barBackgroundColor="#E8E8E8"
              label="Social"
              onPress={this.navSocial.bind(this)}
              icon={<Icon size={24} color="#AE132A" name="people" />}
            />
          </BottomNavigation>
        </View>
    );
  }
  navHome()
  {
    WEB_URL = HOME_URL;
    this.resetWebViewToInitialUrl();
  };
  navNews()
  {
    WEB_URL = GLOBAL;
    this.resetWebViewToInitialUrl();
  };

 navSocial()
 {
   WEB_URL = SOCIAL;
   this.resetWebViewToInitialUrl();
 }


}
const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 52
  }
})
AppRegistry.registerComponent('ReactNativeBackButton', () => ReactNativeBackButton);
