import React from 'react';
import { StyleSheet, Text, Platform, View, Image, TouchableOpacity, Alert, } from 'react-native';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon'
import List from '../components/List'
import { ProcessedList, Tasks, } from '../components/Processed'
import PlanButton from '../components/PlanButton'
import NavButton from '../components/NavButton'



export default class HomePage extends React.Component {

  constructor(props) {
		super(props);

		var calendarSlots = new Array(24).fill(0);
		
		this.state = {
			slots: calendarSlots,
			isPlan: true,
		}
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

	isPlanToggle = () => {
		this.setState({isPlan: !this.state.isPlan});
	}

  getLocalCalendar = async () => {
	  const { Permissions } = Expo;
		const { status, expires, permissions } = await Permissions.askAsync(Permissions.CALENDAR)
		const currentDay = new Date();
		console.log(currentDay);

	  if (status === 'granted') {
			const calendars = await Expo.Calendar.getCalendarsAsync();
			const calendarIds = calendars.map(a => a.id);
			const events = await Expo.Calendar.getEventsAsync(calendarIds, currentDay.setDate(currentDay.getDate()), currentDay.setDate(currentDay.getDate() + 1));
			// const events = await Expo.Calendar.getEventsAsync(calendarIds, new Date(2018, 10), new Date(2018, 11));
			events = events.filter(a => {return !a.allDay})

			// debugging console logs:
			console.log("returning events that don't last all day.");
			console.log(events.map(a => {return {allDay: a.allDay, endDate: a.endDate, startDate: a.startDate, title: a.title};}));

			const startTimes = events.map(a => {
				return new Date(a.startDate).getHours();
			});
			const endTimes = events.map(a => {
				return new Date(a.endDate).getHours();
			});
			console.log("start " + startTimes + "end " + endTimes);


			const slots = this.state.slots;
			for (var i = 0; i < startTimes.length; i++) {
				var start = startTimes[i];
				var end = endTimes[i];
				if (end == 0) {end = 24};
				console.log("start " + start + "end " + end);
				for (var j = start; j < end; j++) {
					slots[j] = 1;
				}
			}
			this.setState({
				slots,
			})
			console.log(this.state.slots);
	  } 
	}

	suggestTimes = () => {
		for (var i = 0; i < List.length; i++) {
			var task = List[i];

		}
	}



	onPlan = () => {
		this.getLocalCalendar();

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

				<PlanButton style={styles.logo} hide={!this.state.isPlan} onPress={() => this.onPlan()} />
				<Tasks style={styles.taskButton} hide={this.state.isPlan} />

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

	taskButton: {
  	backgroundColor: '#CDC6C6',
  	height: 40,
    margin: 20,
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
