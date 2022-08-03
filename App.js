import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Login, SplashScreen} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'SplashScreen'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <FlexBox />
    // <View>
    //   {/* <Text>App</Text>
    //   <Text style={styles.text}>{myName} Usia Saya {myAge} Func {sampel()}</Text>
    //   <Image source={{uri: 'https://placeimg.com/640/480/tech'}} style={styles.image} />
    //   <TextInput placeholder='masukkan nama anda' style={{borderWidth: 1}} keyboardType='numeric' /> */}
    //   {/* <Login /> */}
    //   <FlexBox />
    // </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#2196f3',
    fontSize: 16,
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default App;
