import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomePage from './../screens/HomePage';
import LoginPage from './../screens/LoginPage';
import SignUpPage from './../screens/SignUpPage';

const AppStack = createBottomTabNavigator({ Home: HomePage });
const AuthStack = createStackNavigator({ Login: LoginPage, SignUp: SignUpPage });

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  }
)
