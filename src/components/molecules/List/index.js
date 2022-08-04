import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const List = ({urlImage, title, subtitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 8, marginTop: 8}}>
        <Image source={{uri: urlImage}} style={{width: 32, height: 32}} />
        <View style={{marginHorizontal: 8}}>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default List