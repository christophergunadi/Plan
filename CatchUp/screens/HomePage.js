import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, } from 'react-native';
import * as firebase from 'firebase';

export default class HomePage extends React.Component {

  constructor(props) {
		super(props);
		
		// firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
	}
	
	// onAuthStateChanged = () => {
  //   this.props.navigation.navigate('Auth');
  // }

  getLocalCalendar = async () => {
	  const { Permissions } = Expo;
	  const { status, expires, permissions } = await Permissions.askAsync(Permissions.CALENDAR)
	  if (status === 'granted') {
			const calendar = await Expo.Calendar.getCalendarsAsync();
			const ids = calendar.map(cal => cal.id);
						console.log(ids);
	  } 
	}

	onSignOutPress = () => {
		firebase.auth().signOut()
		  .then( () => {
				this.props.navigation.navigate('Auth');
			}, (error) => {
				Alert.alert(error);
			});
	}
		
  render() {
    return (
			<View style={styles.container}>
			  <Text>
          This is Home :) Welcome to #plan.
        </Text>
				<TouchableOpacity onPress={() => this.getLocalCalendar()}>
					<Image 
					  style={styles.logo}
					  source={require('./../assets/planButton.png')} 
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signOutButton} onPress={() => this.onSignOutPress()}>
				 <Text> Sign Out </Text> 
				</TouchableOpacity>
			</View>
    );
  }
}

const styles = StyleSheet.create ({
	container : {
		flex: 1, 
	  alignItems: 'center',
	  justifyContent: 'center', 
	},
	signOutButton: {
  	backgroundColor: '#CDC6C6',
  	height: 40,
    margin: 20,
  	borderRadius: 60,
		alignItems: 'baseline' ,
		justifyContent:'center',
	},
	logo: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});
