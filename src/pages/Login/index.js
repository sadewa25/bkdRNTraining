import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {IlAssesment, IlBtnPrimary} from '../../assets';
import {fonts} from '../../utils';
import {Gap, Input} from '../../components';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <Image source={IlAssesment} style={styles.image} />
        <Text style={styles.text(fonts.primary[600])}>BKD</Text>
      </View>
      {/* Title */}
      <Gap height={16} />
      <Text style={[styles.text(fonts.primary[500]), {marginHorizontal: 16}]}>Silahkan Masuk,</Text>
      {/* Form */}
      <TextInput
        placeholder="Email"
        style={{marginHorizontal: 16, borderWidth: 1}}
      />
      <View style={{height: 16}} />
      <Input label={'Testing'} placeholder={'Testing'} />
      <Gap height={16} />
      {/* Button */}
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Image source={IlBtnPrimary} style={{width: 32, height: 32}} />
      </TouchableOpacity>
      {/* Subtitle */}
      <Gap height={16} />
      <TouchableOpacity
        style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            color: 'black',
            fontFamily: fonts.primary[400],
            marginRight: 8,
          }}>
          Belum Puya Akun?
        </Text>
        <Text style={{color: 'red', fontFamily: fonts.primary[600]}}>
          Daftar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  containerHeader: {alignItems: 'center', marginTop: 64},
  image: {
    width: 64,
    height: 64,
  },
  text: fontFamily => ({
    fontFamily: fontFamily,
  }),
});

export default Login;
