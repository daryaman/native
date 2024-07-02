import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailForm from '../../partials/DetailForm'
import Layout from '../Layout'

const UbahData = () => {
  return (
    <Layout>
      <Image source={require('../../assets/images/julia-volk.jpg')} 
        style={{ 
          resizeMode: 'cover', 
          width: 150, 
          height: 150, 
          borderRadius: 100, 
          borderWidth: 5,
          borderColor: 'tomato',
          marginTop: 50,
          marginBottom: 20 }} />
      <DetailForm />
    </Layout>
  )
}

export default UbahData

const styles = StyleSheet.create({})