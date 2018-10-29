import React from 'react';
import { StyleSheet, Text, Platform, View, Image, TouchableOpacity, Alert, } from 'react-native';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon'

export default class PlanPage extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          `ios-paper${focused ? '' : '-outline'}`
      }
    />
  ),
	}
  
		
  render() {
    return (
		<View style={styles.container}>
          <Text>#plan your day.</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create ({
	container : {
	  flex: 1, 
	  alignItems: 'center',
	  justifyContent: 'center', 
	}


});
