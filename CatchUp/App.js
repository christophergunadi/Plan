import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginPage from './screens/LoginPage.js';
import ApiKeys from './constants/ApiKeys';
import MainTabNavigator from './navigation/MainTabNavigator';
import RootNavigation from './navigation/RootNavigation';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // If Firebase not yet initialised, initialise Firebase
    if(!firebase.apps.length)
		firebase.initializeApp(ApiKeys.firebaseConfig);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {(this.state.isAuthenticated) ? <MainTabNavigator /> : <RootNavigation />}
        </View>
      );
    }
      // <View style={styles.container}>
			// 	<LoginPage/>
      // </View>
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/logo.png'),
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
