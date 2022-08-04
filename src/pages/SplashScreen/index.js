import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {fonts, storeData, strings} from '../../utils';
import {IlAssesment} from '../../assets';

const SplashScreen = ({navigation}) => {
  const onClick = () => {
    navigation.navigate(strings.screen.Login);
    console.log('helloWorld');
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(strings.screen.Login);
      storeData('isSplash', true);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onClick()}>
        <Image source={IlAssesment} style={styles.image} />
      </TouchableOpacity>
      <Text style={{fontFamily: fonts.primary[600]}}>BKD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default SplashScreen;
