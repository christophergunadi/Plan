import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // If Firebase not yet initialised, initialise Firebase
    if(!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.firebaseConfig);
    }

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
    // return (this.state.isAuthenticated) ? this.props.navigation.navigate('App') : this.props.navigation.navigate('Auth');
    return <AppNavigator />
    // if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       {(this.state.isAuthenticated) ? <MainTabNavigator /> : <RootNavigation />}
    //     </View>
    //   );
    // }
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
