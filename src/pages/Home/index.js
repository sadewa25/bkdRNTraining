import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, strings } from '../../utils'
import { Line, List } from '../../components'
import axios from 'axios'

const Home = ({navigation}) => {

  const navigateToDetail = (item) => {
    console.log(`${item.idTeam}__${item.strTeam}`);
    navigation.navigate(strings.screen.Detail, {
      strTeam: item.strTeam,
      strTeamBadge: item.strTeamBadge,
      idLeague: item.idLeague
    })
  }

  const [dataTeams, setDataTeams] = useState()

  useEffect(() => {
    onLoadData()
  }, [])

  const onLoadData = () => {
    axios.get(`${strings.url.base}search_all_teams.php?s=Soccer&c=England`)
    .then(e => {
      setDataTeams(e.data.teams)
    }).catch(e => console.log(e));
  }

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <View style={{marginHorizontal: 8, marginTop: 8}}>
        <Text style={{color: '#764C28', fontFamily: fonts.primary[600]}}>Daftar Klub</Text>
      </View>
      {/* Items */}
      {/* { dataTeams && console.log(dataTeams)} */}
      <FlatList 
        data={dataTeams}
        renderItem={(item) => {
        return (
          <View>
            <List onPress={() => navigateToDetail(item.item)} key={item.item.idTeam} urlImage={item.item.strTeamBadge} title={item.item.strTeam} subtitle={item.item.strStadium} />
            <Line height={1} lineColor={colors.secondary} />
          </View>
        )
      }} 
      />
      
    </View>
  )
}

export default Home