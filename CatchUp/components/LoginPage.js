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

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
		  username: '',
			password: '',
		};
  }

	login() {
    //login api call
	}

  render() {
    return (
      <View>
				<Image source={require('./logo.png')} />
        <TextInput
          style={styles.inputField}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
        /> 
			  <TouchableOpacity style = {styles.loginButton} onPress= {() => this.login()}>
					  <Text style = {styles.loginText}> Login </Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  inputField: {
    height: 40,	
		width: 250,
		borderWidth: 1,
		borderColor: '#CDC6C6',
		borderBottomLeftRadius: 8,
	  borderBottomRightRadius: 8,
	  borderTopLeftRadius: 8,
	  borderTopRightRadius: 8,
		padding: 5,
		margin: 5,
	},
	loginButton: {
  	backgroundColor: '#CDC6C6',
  	// width: 150,
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
