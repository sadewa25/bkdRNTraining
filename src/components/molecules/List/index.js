import { View, Text, Image } from 'react-native'
import React from 'react'
import { IlAssesment } from '../../../assets'

const List = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 8, marginTop: 8}}>
        <Image source={IlAssesment} style={{width: 32, height: 32}} />
        <View style={{marginHorizontal: 8}}>
            <Text>Chelsea</Text>
            <Text>Nou Camp Stadium</Text>
        </View>
    </View>
  )
}

export default List