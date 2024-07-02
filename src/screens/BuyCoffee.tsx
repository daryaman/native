import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Feather from 'react-native-vector-icons/Feather'

const BuyCoffee = () => {

  const [coffee, setCoffee] = useState('0');
  const [price, setPrice] = useState('');

  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbol: 'Rp'
  }
  
  const currencyFormatter = (value, options) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)
  
    const [currency, decimal] = value.split('.')
    return `${options.symbol} ${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}${options.decimalSeparator}${decimal}`
  }

  useEffect(() => {
    const a = 5000;
    const b = Number(coffee);
    const ab = a*b;
    const curFormat = currencyFormatter(ab, ',')
    setPrice(curFormat);
  }, [coffee]);

  return (
    <Layout>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: 400, width: '90%', borderWidth: 1 }}>
        <Text style={styles.text}>Belikan developer kopi</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 50 }}>
          <Feather name='coffee' size={28} color='white' />
          <Text style={styles.text}>x</Text>
          <TextInput 
          id='input'
          style={[styles.text, styles.input, { marginRight: 5, paddingVertical: 2 }]}
          inputMode='numeric'
          value={coffee} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 30 }}>
          <Text onPress={() => setCoffee('1')} style={[styles.text, styles.inputButton]}>1</Text>
          <Text onPress={() => setCoffee('2')} style={[styles.text, styles.inputButton]}>2</Text>
          <Text onPress={() => setCoffee('3')} style={[styles.text, styles.inputButton]}>3</Text>
        </View>
      </View>
      <Text style={styles.text}>Total {price}</Text>
    </Layout>
  )
}

export default BuyCoffee

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  inputButton: {
    borderRadius: 30,
    backgroundColor: 'pink',
    paddingVertical: 4,
    paddingHorizontal: 12
  }
})