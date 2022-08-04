import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Home, Login, SplashScreen} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position={'top'} />
    </>
  );
};

export default App;
