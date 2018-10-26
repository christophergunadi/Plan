import React, { Component } from 'react';
import {
				StyleSheet,
				AppRegistry,
				Text,
				TextInput,
				View,
				Image,
        TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';
import { Input } from './Input';

export default class LoginPage extends React.Component {
	componentWillMount() {
		const firebaseConfig = {
			apiKey: 'AIzaSyAfRGN_oLvAOU0OhlBQ_ydNX6fRmnwFi7c',
			authDomain: 'catchup-8a114.firebaseapp.com',
		}

		firebase.initializeApp(firebaseConfig);
	}
	
  // constructor(props) {
  //   super(props);
  //   this.state = {
	// 	  username: '',
	// 		password: '',
	// 	};
  // }

	state = {
		username: '',
		password: '',
	}

	login() {
    //login api call
	}

  render() {
    return (
			<View>
			  <Image source={require('./logo.png')} />
				<Input
					placeholder="Username"
					label="Username"
					onChangeText={(username) => this.setState({username})}
					value={this.state.username}
				/>
				<Input
					placeholder="Password"
					label="Password"
					onChangeText={(password) => this.setState({password})}
					secureTextEntry
					value={this.state.password}
				/>
				<TouchableOpacity style = {styles.loginButton} onPress= {() => this.login()}>
					<Text style = {styles.loginText}> Login </Text>
				</TouchableOpacity>
			</View>
    );
  }
}

const styles = StyleSheet.create ({
	loginButton: {
  	backgroundColor: '#CDC6C6',
  	height: 40,
    margin: 5,
  	borderRadius: 30,
		alignItems: 'center',
		justifyContent:'center',
	},
	loginText: {
		color: 'black',
		fontSize: 20,
	},

});
