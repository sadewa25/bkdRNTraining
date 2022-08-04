import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap, Input } from '../../components'
import { colors, fonts, strings, useForm } from '../../utils'
import axios from 'axios'

const Register = ({navigation}) => {
  const [formData, setFormData] = useForm({
      email: '',
      password: '',
  });

  const onRegister = () => {
    axios.post(`${strings.url.basePost}users/${strings.url.keyPost}`, {
      "username": formData.email,
      "password": formData.password
    }).then(e => {
      let data = e.data
      if (data.status == "success") {
        navigation.goBack();
      }
    })
  }

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <Gap height={16} />
      <View style={{marginHorizontal: 16}}>
        <Input label={'Email'} 
          placeholder={'Masukkan Email'} 
          onChangeText={(value) => setFormData('email', value)} />
        <View style={{height: 16}} />
        <Input label={'Password'} 
          placeholder={'Masukkan Password'} 
          onChangeText={(value) => setFormData('password', value)} />
      </View>
      <Gap height={16} />
      <TouchableOpacity style={{alignItems: 'center',}} onPress={() => onRegister()}>
        <Text style={{fontFamily: fonts.primary[500], fontSize: 16, color: colors.primary}}>Daftar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register