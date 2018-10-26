/* Navigator for when user is authenticated and in the app */

import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomePage from '../screens/HomePage';
// import LoginPage from '../screens/LoginPage';
// import SignUpPage from '../screens/SignUpPage';
import TabBarIcon from '../components/TabBarIcon';

const HomeStack = createStackNavigator({
  Home: HomePage,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

/* example of a stack */
// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  HomeStack,
  // this is where you add more tabs (stacks) ..
  // LinksStack,
  // SettingsStack,
});
