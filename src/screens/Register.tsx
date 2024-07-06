import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LogoBig } from '../components/Logo.tsx'
import UserForm from '../partials/UserForm.tsx';
import { AppButtonPrimary, AppButtonSecondary } from '../components/AppButton.tsx';
import Style from './Style.tsx';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const navigation = useNavigation();

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
            <Text style={[Style.text, {flex: 3, textAlign: 'right'}]}>Sudah terdaftar ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[Style.button, Style.bgprimary, { flex: 1, marginLeft: 16 }]}>
              <Text style={Style.buttonText}>
                Login
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
              <AppButtonPrimary onPress={() => navigation.navigate('Home')} buttonText='Daftar' />

              <Text style={[Style.text, { marginTop: 30, textAlign: 'center' }]}>
                atau gunakan akun :
              </Text>

              <AppButtonSecondary onPress={() => navigation.navigate('OAuth')} buttonText='Google' icon='google' iconSize={22} />

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
});