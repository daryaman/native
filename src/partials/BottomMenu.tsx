import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useIsFocused } from '@react-navigation/native'

const BottomMenu = (props: any) => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <View style={{flexDirection: 'row', gap: 20}}>
      <Ionicons onPress={()=>navigation.goBack()} name='chevron-back-outline' size={32} color='white'  />
      <MaterialCommunityIcons onPress={()=>navigation.navigate('Home')} name='home-outline' size={32} color= '#ececff' />
      <MaterialCommunityIcons onPress={()=>navigation.navigate('Messages')} name='email-outline' size={32} color='#ececff' />
      <MaterialCommunityIcons onPress={()=>navigation.navigate('UserData')} name='account-circle-outline' size={32} color= '#ececff' />
      <Feather onPress={()=>navigation.navigate('BuyCoffee')} name='coffee' size={32} color='#ececff' />
    </View>
  )
}

export default BottomMenu

const styles = StyleSheet.create({})