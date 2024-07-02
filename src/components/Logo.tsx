import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Logo = (props: any) => {
  return (
    <>
      <FontAwesome name='openid' size={size} color={'#0064fa'} />
      {props.text ? <Text style={styles.text}>PIKIRULANG Corp</Text> : ''}
    </>
  )
}

export const LogoBig = () => {
  return (
    <>
      <FontAwesome name='openid' size={100} color={'#0064fa'} />
      <Text style={styles.text}>PIKIRULANG Corp</Text>
    </>
  )
}

export const LogoSmall = () => {
  return (
    <>
      <FontAwesome name='openid' size={32} color={'#0064fa'} />
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})