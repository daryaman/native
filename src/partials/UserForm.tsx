import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppInput } from '../components/AppInput';

const UserForm = ({children},props: any) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View style={{ marginVertical: 20 }}>
        <AppInput onChangeText={setName} labelText='Nama' value={name} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <AppInput onChangeText={setEmail} labelText='Email' value={email} keyboardType='email-address' />
      </View>
      <View style={{ marginVertical: 20 }}>
        <AppInput onChangeText={setPassword} labelText='Password' value={password} secureTextEntry={true} />
      </View>
      {children}
    </View>
  )
}

export default UserForm

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    elevation: 4,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingVertical: 2
  }
});