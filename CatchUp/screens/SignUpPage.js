import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Image, TouchableOpacity, } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';
import ApiKeys from './../constants/ApiKeys';

export default class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
		  username: '',
			password: '',
		};
		if(!firebase.apps.length)
		firebase.initializeApp(ApiKeys.firebaseConfig);
  }

	signUp() {
    //signUp api call
	}

  render() {
    return (
			<View>
			  <Image source={require('./../assets/logo.png')} />
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
				<TouchableOpacity style = {styles.loginButton} onPress= {() => this.signUp()}>
					<Text style = {styles.loginText}> Sign Up </Text>
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
