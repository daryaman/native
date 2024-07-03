import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LogoBig } from '../components/Logo.tsx'
import UserForm from '../partials/UserForm.tsx';
import { AppButtonPrimary, AppButtonSecondary } from '../components/AppButton.tsx';
import Style from './Style.tsx';

const Register = (props: any) => {

  return (
    <View style={[
          Style.bgapp, { 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%', 
          height: '100%'}]}>
      <ScrollView style={{width:'100%'}}>
        <View style={{ alignItems: 'center', paddingTop: 20, width: '100%' }}>
          <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text style={{color: 'white'}}>Sudah terdaftar ?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={[styles.btn, { backgroundColor: '#0064fa', marginLeft: 16 }]}>
              <Text style={styles.txt}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              width: '100%', 
              paddingTop: 40, }}>

          <LogoBig />

          <View style={{ marginTop: 20, width: '90%' }}>

            <UserForm />

            <View style={{ gap: 10, marginVertical: 20 }}>
              <AppButtonPrimary onPress={() => props.navigation.navigate('Home')} buttonText='Daftar' />

              <Text style={[styles.txt, { marginBottom: 10, marginTop: 30 }]}>
                atau daftar menggunakan akun berikut :
              </Text>

              <AppButtonSecondary onPress={() => props.navigation.navigate('OAuth')} buttonText='Google' icon='google' />
              <AppButtonSecondary onPress={() => props.navigation.navigate('OAuth')} buttonText='facebook' icon='facebook' />

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 4,
    borderRadius: 20,
  },
  txt: {
    textAlign: 'center',
    // color: 'white',
  },
});