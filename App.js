import React from 'react';
import { processColor, StyleSheet, Text, View, WebView, TouchableOpacity, AppRegistry } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
var WEBVIEW_REF = 'https://agcocorp--empcomm.cs68.my.salesforce.com//servlet/networks/session/create?url=%2Fagcoemployee%2Fs%2F&site=0DM1D0000004CWD&refURL=http%3A%2F%2Fempcomm-agcommunity.cs68.force.com%2Fagcoemployee%2Flogin&inst=1D';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: true };
  }
  render() {
    return (
      <View style={styles.container}>

        <WebView
          ref={WEBVIEW_REF}
          style={{flex: 1}}

          source={{uri: 'https://agcocorp--empcomm.cs68.my.salesforce.com//servlet/networks/session/create?url=%2Fagcoemployee%2Fs%2F&site=0DM1D0000004CWD&refURL=http%3A%2F%2Fempcomm-agcommunity.cs68.force.com%2Fagcoemployee%2Flogin&inst=1D'}}
          />
          <View style={styles.topbar}>
            <TouchableOpacity
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}
              >
              <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}><Ionicons name="md-home" size={32} color="#AE132A" /></Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
  onBack() {
   this.refs[WEBVIEW_REF].goBack();
 }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topbar: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbarTextDisabled: {
    color: '#fff'
  }
});
AppRegistry.registerComponent('ReactNativeBackButton', () => ReactNativeBackButton);
