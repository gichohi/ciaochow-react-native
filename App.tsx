import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigatorParams } from './types';
import ContentScreen from './screens/ContentScreen';
import SplashScreen from './screens/SplashScreen';

const App = () => {

  const RootStack = createNativeStackNavigator<RootStackNavigatorParams>();

  return (
      <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
        <RootStack.Screen name="Home" component={ContentScreen} />
        <RootStack.Screen name="Splash" component={SplashScreen} />
      </RootStack.Navigator>
      </NavigationContainer>
  );
}

export default App;