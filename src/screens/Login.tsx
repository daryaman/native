import { StyleSheet, View, Platform, Text, BackHandler } from 'react-native'
import React, { useState } from 'react'
import { LogoBig } from '../components/Logo';
import { AppInput } from '../components/AppInput';
import { AppButtonPrimary, AppButtonSecondary } from '../components/AppButton';
import axios from '../libs/axios';
import Style from './Style';
import { useNavigation } from '@react-navigation/native';
import { login, loadUser } from '../hooks/auth';

const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  async function handleLogin() {
    setErrors({});
    try {
      await login({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      });

      const user = await loadUser();

      console.log(user);
      
    } catch (e) {
      if (e.response?.status === 422) {
        setErrors(e.response.data.errors)
      }
      console.log(e.response?.status);
      console.log(e.response?.data);
      console.log(email);
      console.log(password);

    }
  }

  return (
    <View style={[Style.bgapp, { justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }]}>

      <LogoBig />

      <View style={{ width: '90%', marginTop: 20 }}>
        <View style={{ marginVertical: 20 }}>
          <AppInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType={'email-address'}
            labelText='Email'
            placeholder='Email'
            errors={errors.email} />
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            labelText='Password'
            placeholder='Password'
            secureTextEntry={true} />
        </View>

        <View style={{ gap: 10, marginVertical: 20 }}>
          <AppButtonPrimary onPress={handleLogin} buttonText='Login' />
          <Text style={[Style.text, { marginTop: 20, textAlign: 'center'}]}>belum punya akun ?</Text>
          <AppButtonSecondary onPress={() => navigation.navigate('Register')} buttonText='Daftar' />
          {/* <AppButtonSecondary onPress={() => BackHandler.exitApp()} buttonText='Keluar' /> */}
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