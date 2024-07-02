import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const OAuth = (props: any) => {

  const [icon, setIcon] = useState('google')

  return (
    <View>
      <FontAwesome name={icon} size={54} />
      <Text>Pilih Akun yang ingin digunakan :</Text>
      <Text>deddy.daryaman@gmail.com</Text>
      <Text>deddy.relax@gmail.com</Text>
    </View>
  )
}

export default OAuth

const styles = StyleSheet.create({})