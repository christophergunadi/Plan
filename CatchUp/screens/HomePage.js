import React from 'react';
import { StyleSheet, Text, Platform, View, Image, TouchableOpacity, Alert, } from 'react-native';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon'

export default class HomePage extends React.Component {

  constructor(props) {
		super(props);
		
	}	

	static navigationOptions = {
    tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          `ios-home${focused ? '' : '-outline'}`
      }
    />
  ),
	}

  getLocalCalendar = async () => {
	  const { Permissions } = Expo;
	  const { status, expires, permissions } = await Permissions.askAsync(Permissions.CALENDAR)
	  if (status === 'granted') {
			const calendars = await Expo.Calendar.getCalendarsAsync();
			const calendarIds = calendars.map(a => a.id);
			console.log(calendarIds);
			const events = await Expo.Calendar.getEventsAsync(calendarIds, new Date(2018, 9), new Date(2018, 11));

			console.log(events.map(a => {return {allDay: a.allDay, endDate: a.endDate, startDate: a.startDate, title: a.title};}));
			// for (var i = 0; i < calendars.length; i++) {
			// 	calendar = calendars[i];
			// 	console.log(await Expo.Calendar.getEventsAsync())
			// }
			// calendar.id
			// console.log(calendar);
			// const ids = calendar.map(cal => cal.id);
			// 			console.log(ids);
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
		marginTop: 20,
		paddingHorizontal: 50,
	},
	logo: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});
