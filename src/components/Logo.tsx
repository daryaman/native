import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Style from '../screens/Style'

export const Logo = (props: any) => {
  return (
    <>
      <FontAwesome name='openid' size={props.size} color={'#6099f2'} />
      {props.text ? <Text style={styles.text}>PIKIRULANG Corp</Text> : ''}
    </>
  )
}

export const LogoBig = () => {
  return (
    <>
      <FontAwesome name='openid' size={100} color={'#6099f2'} />
      <Text style={styles.text}>PIKIRULANG Corp</Text>
    </>
  )
}

export const LogoSmall = () => {
  return (
    <>
      <FontAwesome name='openid' size={32} color={'#6099f2'} />
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})