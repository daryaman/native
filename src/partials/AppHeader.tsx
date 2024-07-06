import { Text, View } from 'react-native'
import React from 'react'
import Style from '../screens/Style'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

type TAppHeader = {
  title?: string,
  show?: boolean,
}

const AppHeader = ( {show, title}: TAppHeader ) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', width:'90%', justifyContent:'space-between', alignItems:'center'}}>
      <Text style={[Style.GemunuLibreSemiBold, Style.textColPrimary, {fontSize: 28}]}>{title}</Text>
      <Feather onPress={()=>navigation.navigate('BuyCoffee')} name='coffee' size={32} style={[Style.textColSecondary, { elevation: 4}]} />
    </View>
  )
}

export default AppHeader