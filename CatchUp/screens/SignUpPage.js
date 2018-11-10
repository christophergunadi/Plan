import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Alert, Text} from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';

export default class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
		  email: '',
			password: '',
      repeatPassword: '',
		};
  }

  static navigationOptions = {
		title: 'Sign up',
		header: null,
  }

  onSignUpPress = () => {
    if (this.state.password !== this.state.repeatPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then( (user) => {
        this.props.navigation.navigate('App');
      }, (error) => {Alert.alert(error.message)});
  }

  onBackPress = () => {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
			<View style={{alignItems: 'center', justifyContent: "center"}}>
        <Image source={require('./../assets/logo.png')} style={{borderRadius: 20, marginBottom: 20}} />
			</View>

			<View style={{alignItems: 'center', justifyContent: "center"}}>
				<Input
          value={this.state.email}
					placeholder="email"
					onChangeText={(email) => this.setState({email})}
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
      <View style={{alignItems: 'center', justifyContent: "center"}}>
        <Input
          value={this.state.repeatPassword}
					placeholder="Repeat password"
					onChangeText={(repeatPassword) => this.setState({repeatPassword})}
					secureTextEntry
				/>
			</View>
				
			<TouchableOpacity style={styles.loginButton} onPress={this.onSignUpPress}>
			  <Text style={styles.loginText}>SIGN UP</Text>
			</TouchableOpacity>
				
			<TouchableOpacity style={styles.loginButton} onPress={this.onBackPress}>
				<Text style={styles.loginText}>BACK</Text>
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
