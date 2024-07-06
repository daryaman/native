import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Style from '../screens/Style'

const BottomMenu = (props: any) => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <View style={{flexDirection: 'row', width:'100%', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Ionicons onPress={()=>navigation.goBack()} name='chevron-back-outline' size={36} style={Style.textColBg}  />
      <MaterialCommunityIcons onPress={()=>navigation.navigate('Home')} name='home-outline' size={36} style={Style.textColBg} />
      <MaterialCommunityIcons onPress={()=>navigation.navigate('UserData')} name='account-outline' size={38}  style={Style.textColBg} />
      <MaterialCommunityIcons onPress={()=>navigation.navigate('Order')} name='open-in-new' size={38}  style={Style.textColBg} />
      <Ionicons onPress={()=>navigation.navigate('BuyCoffee')} name='power' size={36} style={Style.textColNeutral} />
    </View>
  )
}

export default BottomMenu

const styles = StyleSheet.create({})