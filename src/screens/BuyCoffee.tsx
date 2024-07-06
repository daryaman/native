import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Feather from 'react-native-vector-icons/Feather'
import Style from './Style'
import { AppButtonPrimary } from '../components/AppButton'

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
    const ab = a * b;
    const curFormat = currencyFormatter(ab, ',')
    setPrice(curFormat);
  }, [coffee]);

  return (
    <Layout>
      <View style={{ alignItems: 'center', marginTop: 20, width: '90%' }}>
        <View style={[Style.card, Style.bgprimary,{marginBottom: 30}]}>
          <Text style={[Style.text, Style.textColBg]}>Terimakasih atas dukungan anda dalam berbagi rezeki dengan kami para pengembang aplikasi</Text>
        </View>
        <Feather name='coffee' size={80} style={Style.textColSecondary} />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 30 }}>
        <TextInput
            id='input'
            style={[Style.text, Style.input, { marginRight: 5, paddingVertical: 2 }]}
            inputMode='numeric'
            value={coffee} />
          <Text style={[Style.text, {marginRight: 10}]}>x</Text>
          <Text onPress={() => setCoffee('1')} style={[Style.buttonText, style.inputButton, Style.bgprimary]}>1</Text>
          <Text onPress={() => setCoffee('2')} style={[Style.buttonText, style.inputButton, Style.bgprimary]}>2</Text>
          <Text onPress={() => setCoffee('3')} style={[Style.buttonText, style.inputButton, Style.bgprimary]}>3</Text>
        </View>
      <Text style={[Style.GemunuLibreSemiBold, {marginTop: 30, marginBottom: 20, fontSize: 32}]}>Total {price}</Text>
      <AppButtonPrimary buttonText='Lanjut' />
      </View>
    </Layout>
  )
}

export default BuyCoffee

const style = StyleSheet.create({
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
    paddingVertical: 4,
    paddingHorizontal: 12
  }
})