import React from 'react';
import { StyleSheet, View, Image, Button, Alert, TouchableOpacity, Text } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
		  email: '',
			password: '',
		};
		
		// firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  static navigationOptions = {
		title: 'Login',
		header: null,
	}

	// onAuthStateChanged = () => {
  //   this.props.navigation.navigate('App');
  // }
	
	// async signInWithGoogleAsync() {
	// 	try {
	// 		const result = await Expo.Google.logInAsync({
	// 			iosClientId: '580091065854-pl73mvprbfdp86mtg1mjc97376h7785i.apps.googleusercontent.com',
	// 			scopes: ['profile', 'email'],
	// 		});

	// 		if (result.type === 'success') {
	// 			const credential = firebase.auth.GoogleAuthProvider(result.accessToken);
	// 			firebase.auth().signInWithCredential(credential);
	// 		} else {
	// 			return {cancelled: true};
	// 		}
	// 	} catch(e) {
	// 		return {error: true};
	// 	}
	// }

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
			<View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
			<View style={{alignItems: 'center', justifyContent: "center"}}>
			  <Image source={require('./../assets/logo.png')} style={{borderRadius: 20, marginBottom: 20}}/>
			</View>

			<Input
				placeholder="Email"
				onChangeText={(email) => this.setState({email})}
				value={this.state.email}
			/>
			<Input
				placeholder="Password"
				onChangeText={(password) => this.setState({password})}
				secureTextEntry={true}
				value={this.state.password}
			/>
			
			<TouchableOpacity style={styles.loginButton} onPress={this.onLoginPress}>
			  <Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
				
			<TouchableOpacity style={styles.loginButton} onPress={this.onSignUpPress}>
				<Text style={styles.loginText}>SIGN UP</Text>
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
		width: 300,
	},
	loginText: {
		color: 'black',
		fontSize: 20,
	},
	logo: {
		flex: 1,
		resizeMode: 'center',
	}
});
