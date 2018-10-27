import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, } from 'react-native';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }


  getLocalCalendar = async () => {
	  const { Permissions } = Expo;
	  const { status, expires, permissions } = await Permissions.askAsync(Permissions.CALENDAR)
	  if (status === 'granted') {
			const calendar = await Expo.Calendar.getCalendarsAsync();
			const ids = calendar.map(cal => cal.id);
						console.log(ids);
	  } 
	}
		
  render() {
    return (
			<View style={styles.container}>
			  <Text>
          This is Home :) Welcome to Catch Up!
        </Text>
				<TouchableOpacity
					onPress={() => this.getLocalCalendar()}
				>
				 <Text> Press ME! </Text> 
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
	}


});
