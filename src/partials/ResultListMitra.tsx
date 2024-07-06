import { Alert, View, Text, Linking } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from '../screens/Style';

type TListMitra = {
  name: string,
  rating: number,
  contact: string,
  address: string,
}

const ResultListMitra = ({ name, rating, contact, address }: TListMitra) => {

  const openApp = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Unable to open this app');
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  const openWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with a valid phone number
    const url = `whatsapp://send?phone=${phoneNumber}`;
    openApp(url);
  };

  const openDialer = () => {
    const phoneNumber = {contact}; // Replace with a valid phone number
    const url = `tel:${phoneNumber}`;
    openApp(url);
  };

  return (
    <View style={{
      marginTop: 10,
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      paddingBottom: 2
    }}>
      <View style={{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 2
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Ionicons name='person-circle-outline' size={50} />
          <Text style={[Style.GemunuLibreSemiBold, { marginLeft: 10, fontSize: 18 }]}>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={[
            Style.GemunuLibreBold, {
              fontSize: 22,
              marginRight: 2,
              color: `${rating > 4.6 ? 'blue' : rating > 4.2 ? 'orange' : 'red'}`,
            }]}>{rating}</Text>
          <MaterialIcons name='keyboard-arrow-right' size={20} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 3 }}>
          <Text style={[Style.GemunuLibreMedium, { fontSize: 16 }]}>{address} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae?</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 5, justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: 5, paddingRight: 2 }}>
          <MaterialCommunityIcons name='whatsapp' size={24} color='green' onPress={openWhatsApp} />
          <MaterialCommunityIcons name='phone' size={24} color='green' onPress={openDialer} />
        </View>
      </View>
    </View>
  )
}

export default ResultListMitra