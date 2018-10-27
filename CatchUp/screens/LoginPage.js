import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';
import ApiKeys from './../constants/ApiKeys';
import AppNavigator from './../navigation/AppNavigator'

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
		  email: '',
			password: '',
			token: '',
		};

  }

  static navigationOptions = {
    title: 'Login',
	}
	
	signInWithGoogle = async () => {
		try {
			Expo.Google.logInAsync({
				iosClientId: '580091065854-pl73mvprbfdp86mtg1mjc97376h7785i.apps.googleusercontent.com',
			}).then( (result) => {
				if (result.type === 'success') {
					this.setState({token: result.accessToken});
					firebase.auth().signInWithCredential();
					console.log(this.state.token);
				} else {
					console.log("Cannot retrieve access token");
				}
			})
		} catch (e) {
			return {error: true};
		}
	}	

	signInToFirebase
		

	onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then( (user) => {
        this.props.navigation.navigate('App');
      }, (error) => {Alert.alert(error.message)});
	}

  onSignUpPress = () => {
    this.props.navigation.navigate("SignUp");
  }


  render() {
    return (
			<View>
			  <Image source={require('./../assets/logo.png')} />
				<Input
					placeholder="email"
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
				/>
				<Input
					placeholder="Password"
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					value={this.state.password}
				/>

        /* I'm not sure why I cannot make it look like a normal button here */
        <Button title="Login" onPress={this.onLoginPress} />
        <Button title="Sign Up" onPress={this.onSignUpPress} />
				<Button title="Google Sign-in" onPress={this.signInWithGoogle} />

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
