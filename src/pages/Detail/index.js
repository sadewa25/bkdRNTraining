import { View, Text, Image, VirtualizedList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, strings } from '../../utils'
import { Gap, Line } from '../../components'
import axios from 'axios'

const Detail = ({route, navigation}) => {

  const {strTeam, strTeamBadge} = route.params

  useEffect(() => {
    onLoadSeason()
  }, [])
  
  const [dataSeason, setDataSeason] = useState()
  
  const onLoadSeason = () => {
    axios.get(`${strings.url.base}search_all_seasons.php?id=4849`).then(e => {
      console.log(e.data);
      setDataSeason(e.data.seasons)
    })
  }

  const getItemCount = (data) => data.length;

  const getItem = (data, index) => ({
    id: data[index].strSeason,
    title: data[index].strSeason
  });
  

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <View style={{alignItems: 'center', marginTop: 16}}>
        <Image source={{uri: strTeamBadge}} style={{width: 64, height: 64}} />
        <Text>{strTeam}</Text>
      </View>

      {/* Season */}
      <Gap height={16} />
      <Text 
      style={{color: colors.primary, fontSize: 21, fontFamily: fonts.primary[600], marginHorizontal: 8}}>
      Season</Text>

      {dataSeason && console.log(dataSeason)}
      {dataSeason && (
          <VirtualizedList
            data={dataSeason}
            initialNumToRender={10}
            renderItem={({ item }) => {
              return (
                <View style={{marginHorizontal: 16}}>
                  <Text style={{marginHorizontal: 8}}>{item.title}</Text>
                  <Line height={1} lineColor={colors.primary} />
                  <Gap height={16} />
                </View>
              )
            }}
            keyExtractor={item => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
      )}

    </View>
  )
}

export default Detail