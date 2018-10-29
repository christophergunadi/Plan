import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, } from 'react-native';



export default class PlanPage extends React.Component {

  constructor(props) {
    super(props);
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
