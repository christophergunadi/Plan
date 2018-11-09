import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import TabBarIcon from '../components/TabBarIcon'
import {List} from '../components/List'
import { Input } from './../components/Input';

export default class PlanPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      thing: '',
    };
  }

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
          `ios-paper${focused ? '' : '-outline'}`
      }
    />
  ),
  }
  
  onAddPress = () => {
    List.push(this.state.thing);
    console.log(List);
  }
  
		
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', paddingTop: 30}}>

			<Input
				placeholder="Add thing to do"
				onChangeText={(thing) => this.setState({thing})}
				value={this.state.thing}
			/>
			
			<TouchableOpacity style={styles.loginButton} onPress={this.onAddPress}>
			  <Text style={styles.loginText}>Add</Text>
			</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
	container : {
	  flex: 1, 
	  alignItems: 'center',
	  justifyContent: 'center', 
	},

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

});