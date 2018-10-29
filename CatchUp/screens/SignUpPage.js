import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert} from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';
import ApiKeys from './../constants/ApiKeys';
import AppNavigator from './../navigation/AppNavigator'

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
        <Image source={require('./../assets/logo.png')} />
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
				
			<View style={styles.loginButton}>
        <Button title="Sign Up" onPress={this.onSignUpPress} />
			</View>
			<View style={styles.loginButton}>
        <Button title="back" onPress={this.onBackPress} />
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

});
