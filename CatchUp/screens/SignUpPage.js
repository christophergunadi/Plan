import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, Button} from 'react-native';
import * as firebase from 'firebase';
import { Input } from './../components/Input';
import ApiKeys from './../constants/ApiKeys';

export default class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
		  username: '',
			password: '',
      repeatPassword: '',
		};
		if(!firebase.apps.length)
		firebase.initializeApp(ApiKeys.firebaseConfig);
  }

  onSignUpPress = () => {

  }

  onBackPress = () => {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
			<View>
			  <Image source={require('./../assets/logo.png')} />
				<Input
          value={this.state.username}
					placeholder="Username"
					onChangeText={(username) => this.setState({username})}
				/>
				<Input
          value={this.state.password}
					placeholder="Password"
					onChangeText={(password) => this.setState({password})}
					secureTextEntry
				/>
        <Input
          value={this.state.repeatPassword}
					placeholder="Repeat password"
					onChangeText={(password) => this.setState({repeatPassword})}
					secureTextEntry
				/>
				<Button title="Sign Up" onPress={this.onSignUpPress} />
        <Button title="back" onPress={this.onBackPress} />
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
