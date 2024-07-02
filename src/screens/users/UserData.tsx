import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../Layout'
import { AppButtonPrimary } from '../../components/AppButton'
import { useNavigation } from '@react-navigation/native'
import { AppCard, AppCardNeutral } from '../../components/AppCard'
import Style from '../Style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const UserData = () => {

  const navigation = useNavigation();

  return (
    <Layout>
      <View>
        <Image source={require('../../assets/images/julia-volk.jpg')}
          style={{
            resizeMode: 'cover',
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#0064fa',
            marginTop: 30
          }} />
        <FontAwesome name='camera' size={32} color='#fa9600' style={{position: 'absolute', bottom: 10, left: 10}}/>
      </View>
      <Text style={[Style.textneutral, { fontSize: 32, marginTop: 24, flex: 3 }]}>Suratan Takdir</Text>
      <AppCard mtop={20} mbot={10}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[Style.textneutral, { flex: 1 }]}>Email</Text>
          <Text style={[Style.textneutral, { flex: 3 }]}>:  takdir@suratan.set</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[Style.textneutral, { flex: 1 }]}>Telepon</Text>
          <Text style={[Style.textneutral, { flex: 3 }]}>:  0987 - 4422 5511</Text>
        </View>
      </AppCard>
      <AppCardNeutral mtop={16}>
        <Text style={{ marginBottom: 20 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, impedit tempora adipisci similique necessitatibus cum dignissimos quae voluptate? Atque, odio?</Text>
        <AppButtonPrimary buttonText='Ubah' onPress={() => navigation.navigate('UbahData')} />
      </AppCardNeutral>
    </Layout>
  )
}

export default UserData

const styles = StyleSheet.create({})