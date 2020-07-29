/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screen/Home';
import { Provider } from 'react-redux';

import { store } from './src/config/Store';


const Drawer = createDrawerNavigator();
function App(){
  return(
    <Provider store={store}>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
  )
}

export default App;
