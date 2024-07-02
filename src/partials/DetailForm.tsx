import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import UserForm from './UserForm';
import { AppInput } from '../components/AppInput';

const DetailForm = (props: any) => {

  const [telepon, setTelepon] = useState('');
  const [kodepos, setKodepos] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <UserForm>
      <View style={{ marginVertical: 20 }}>
        <AppInput onChangeText={setTelepon} labelText='Telepon' value={telepon} keyboardType='number-pad' />
      </View>
      <View style={{ marginVertical: 20 }}>
        <AppInput onChangeText={setKodepos} labelText='Kodepos' value={kodepos} keyboardType='number-pad' />
      </View>
      <View style={{ marginVertical: 20 }}>
        <AppInput onChangeText={setAlamat} labelText='Alamat' value={alamat} />
      </View>
    </UserForm>
  )
}

export default DetailForm

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