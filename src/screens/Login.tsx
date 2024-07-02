import { StyleSheet, View, Platform } from 'react-native'
import React, { useState } from 'react'
import { LogoBig } from '../components/Logo';
import { AppInput } from '../components/AppInput';
import AppButton, { AppButtonPrimary, AppButtonSecondary } from '../components/AppButton';
import axios from 'axios';

const Login = (props: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  async function handleLogin() {
    setErrors({});
    try {
      await axios.post('http://10.0.2.2:8000/api/login', {
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      }, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/json'
        },
        withCredentials: true,
        withXSRFToken: true
      })
    } catch (e) {
      if (e.response?.status === 422){
        setErrors(e.response.data.errors)
      }
      console.log(e.response?.status);
      console.log(e.response?.data);
      console.log(email);
      console.log(password);

    }
  }

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#151515' }}>

      <LogoBig />

      <View style={{ width: '90%', marginTop: 20 }}>
        <View style={{ marginVertical: 20 }}>
          <AppInput 
            onChangeText={(text) => setEmail(text)} 
            value={email} 
            keyboardType={'email-address'} 
            labelText='Email'
            errors={errors.email} />
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppInput 
            onChangeText={(text) => setPassword(text)} 
            value={password} 
            labelText='Password'
            secureTextEntry={true} />
        </View>

        <View style={{ gap: 10, marginVertical: 20 }}>
          <AppButtonPrimary onPress={handleLogin} buttonText='Login' />
          <AppButtonPrimary onPress={() => props.navigation.navigate('Register')} buttonText='Register' />
          <AppButtonSecondary buttonText='Keluar' />
        </View>

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    elevation: 4,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontWeight: '300',
    marginBottom: 2,
    color: 'white',
    letterSpacing: 1
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingVertical: 2,
  }
});