import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TouchButton from '../components/AppButton'
import Layout from './Layout'

const LoginAs = (props: any) => {


  return (
    <Layout>

    <View style={{
      width: '100%',
      height: '100%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        width: '90%',
        gap: 20
      }}>
        <TouchButton buttonColor='tomato' buttonText='Pengguna Jasa' textColor='white' onPress={() => props.navigation.navigate('Home')} />
          <Text style={{textAlign:'center'}}> atau </Text>
        <TouchButton buttonColor='tomato' buttonText='Penyedia Jasa' textColor='white' onPress={() => props.navigation.navigate('Home')} />
      </View>
    </View>
    </Layout>
  )
}

export default LoginAs

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingVertical: 2,
  }
});