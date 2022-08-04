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
import {fonts, showSuccess, strings, useForm} from '../../utils';
import {Gap, Input} from '../../components';
import crashlytics from '@react-native-firebase/crashlytics';


const Login = ({navigation}) => {

  const [formData, setFormData] = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    // crashlytics().crash();
    showSuccess('Berhasil Login')
    //navigation.navigate(strings.screen.Home)
    // if (formData.email == 'admin' && formData.password == 'admin') {
    //   navigation.navigate(strings.screen.Home)
    // }
    // else {
    //   console.log('Username/ Password Anda Salah');
    // }
  }

  const navToRegister = () => {
    navigation.navigate(strings.screen.Register)
  }

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
      <Gap height={16} />
      <View style={{marginHorizontal: 16}}>
        <Input label={'Email'} placeholder={'Masukkan Email'} onChangeText={(value) => setFormData('email', value)} />
        <View style={{height: 16}} />
        <Input label={'Password'} placeholder={'Masukkan Password'} onChangeText={(value) => setFormData('password', value)} />
      </View>
      <Gap height={16} />
      {/* Button */}
      <TouchableOpacity style={{alignItems: 'center'}} onPress={() => onLogin()}>
        <Image source={IlBtnPrimary} style={{width: 32, height: 32}} />
      </TouchableOpacity>
      {/* Subtitle */}
      <Gap height={16} />
      <TouchableOpacity
        style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}
        onPress = {() => navToRegister()}
        >
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
