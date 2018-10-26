import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, Button } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';
import ApiKeys from './../constants/ApiKeys';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
		  username: '',
			password: '',
		};

  }

	onLoginPress = () => {

	}

  onSignUpPress = () => {
    this.props.navigation.navigate("SignUp");
  }


  render() {
    return (
			<View>
			  <Image source={require('./../assets/logo.png')} />
				<Input
					placeholder="Username"
					onChangeText={(username) => this.setState({username})}
					value={this.state.username}
				/>
				<Input
					placeholder="Password"
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					value={this.state.password}
				/>

        /* I'm not sure why I cannot make it look like a normal button here */
        <Button style={styles.loginButton} title="Login" onPress={this.onLoginPress} />
        <Button title="Sign Up" onPress={this.onSignUpPress} />

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
