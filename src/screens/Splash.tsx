import { Button, Image, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Style from './Style'


const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[Style.GemunuLibreRegular, Style.textColPrimary, { fontSize: 60 }]}>Loading...</Text>
      <Image source={require('../assets/images/burung.webp')} style={{ width: '100%', resizeMode: 'contain', marginTop: 50 }} />
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
      }}>

        <Button title='next' onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  )
}

export default Splash