import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, FlatList} from 'react-native';
import TabBarIcon from '../components/TabBarIcon'
import {List} from '../components/List'
import { Input } from './../components/Input';

export default class PlanPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      task: '',
      duration: 0,
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
    List.push({task: this.state.task, duration: this.state.duration});
    console.log(List);
  }
  
		
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30,
      }}>

			<Input
				placeholder="Add task to do"
				onChangeText={(task) => this.setState({task})}
				value={this.state.task}
			/>

      
      <Text style={styles.loginText}>Select duration: </Text>
      <Picker
        selectedValue={this.state.duration}
        style={{ height: 200, width: 100}}
        onValueChange={(itemValue) => this.setState({duration: itemValue})}>
        <Picker.Item label="0 h" value={0}/>
        <Picker.Item label="1 h" value={1}/>
        <Picker.Item label="2 h" value={2}/>
        <Picker.Item label="3 h" value={3}/>
        <Picker.Item label="4 h" value={4}/>
      </Picker>
      
			
			<TouchableOpacity style={styles.loginButton} onPress={this.onAddPress}>
			  <Text style={styles.loginText}>Add</Text>
			</TouchableOpacity>

      <FlatList
        data={List}
        renderItem={({item}) => <Text style={styles.item}>task: {item.task}</Text>}
      />



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