import React from 'react';
import { StyleSheet, View, Image, Button, Alert } from 'react-native';
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
			  <Image source={require('./../assets/logo.png')} />
			</View>

			<View style={{alignItems: 'center', justifyContent: "center"}}>
				<Input
					placeholder="Email"
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
				/>
			</View>
			<View style={{alignItems: 'center', justifyContent: "center"}}>
				<Input
					placeholder="Password"
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					value={this.state.password}
				/>
			</View>
				
			<View style={styles.loginButton}>
        <Button containerStyle={styles.loginButton} title="Login" onPress={this.onLoginPress} />
			</View>
			<View style={styles.loginButton}>
        <Button title="Sign Up" onPress={this.onSignUpPress} />
			</View>
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
	logo: {
		flex: 1,
		resizeMode: 'center',
	}
});
