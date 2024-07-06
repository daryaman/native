"use client";

import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import Layout from './Layout'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AppButtonSquare } from '../components/AppButton';
import Style from './Style';
// import { useAppContext } from '../hooks/UserContext';

const Home = (props: any) => {
  // const {userId} = useAppContext();
  return (
    <Layout>
      {/* <Text>{userId}</Text> */}
      {/* Hero section ====================== */}
      {/* <ImageBackground 
        source={require('../assets/images/andrea.jpg')} 
        style={{ width: '100%', alignItems: 'center' }}
        resizeMode='cover' >
        <View style={{ width: '90%', paddingVertical: 20 }}>
          <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: 'white', marginBottom: 20 }}>
            <TextInput placeholder='Cari' style={{  flex: 5, padding: 4, color: 'white' }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <FontAwesome name='search' size={20} style={{ color: 'white' }} />
            </View>
          </View>
          <Text style={{ color: 'white', fontSize: 32, marginTop: 20  }}>Selamat pagi ATENG..</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 10, marginBottom: 10 }}>Mau melakukan apa hari ini?</Text>
        </View>
      </ImageBackground> */}

      <Text style={[Style.GemunuLibreRegular, Style.textColPrimary, { fontSize: 32, marginTop: 10 }]}>Selamat datang</Text>
      <Image source={require('../assets/images/burung.webp')} style={{ width: '100%', resizeMode: 'contain', marginTop: 20 }} />

      {/* Menu section ======================= */}
      {/* <View style={{ width: '90%', paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <AppButtonSquare icon='FontAwesome' iconName='history' iconSize={32} iconColor='white' buttonText='Riwayat' />
          <AppButtonSquare icon='FontAwesome' iconName='calendar' iconSize={32} iconColor='white' buttonText='Jadwal' />
          <AppButtonSquare icon='Ionicons' iconName='stats-chart' iconSize={32} iconColor='white' buttonText='Statistik' />
        </View>
      </View>
      <View style={{ width: '90%', paddingBottom: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <AppButtonSquare icon='MaterialCommunityIcons' iconName='account' iconSize={32} iconColor='white' buttonText='Akun' />
          <AppButtonSquare icon='FontAwesome' iconName='search' iconSize={32} iconColor='white' buttonText='Cari' />
          <AppButtonSquare />
        </View>
      </View>
      <View style={{ width: '100%', alignItems: 'center', paddingVertical: 10, marginTop: 10 }}>
        <View style={{ width: '90%' }}>
          <Text style={{ fontSize: 16, color: 'white' }}>Tips harian :</Text>
          <Text style={{ marginTop: 5, fontWeight: 300, letterSpacing: 1 }}>Ipsum dolor sit amet consectetur adipisicing elit. Enim, ut sint neque possimus consectetur consequuntur nihil impedit, provident ratione iusto amet et. Itaque velit error eveniet sunt minus qui quas dolore natus sapiente obcaecati aperiam culpa maiores doloribus dolorum accusamus sed cupiditate, officiis fugit corrupti possimus. Officia minima ex explicabo.</Text>
        </View>
      </View> */}
    </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
})