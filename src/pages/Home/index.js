import { View, Text, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { Line, List } from '../../components'
import { IlAssesment } from '../../assets'

const Home = () => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <View style={{marginHorizontal: 8, marginTop: 8}}>
        <Text style={{color: '#764C28', fontFamily: fonts.primary[600]}}>Daftar Klub</Text>
      </View>
      <Line height={1} lineColor={colors.secondary} />
      {/* Items */}
      <List />
      
    </View>
  )
}

export default Home