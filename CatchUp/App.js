import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    if(!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.firebaseConfig);
    }
  }

  render() {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
