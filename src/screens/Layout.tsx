import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { AuthProvider } from '../hooks/UserContext'
import { AppWrapper } from '../hooks/UserContext'
import BottomMenu from '../partials/BottomMenu'
import Style from './Style'
import AppHeader from '../partials/AppHeader'

export default function Layout({ children }: any) {

  return (
    <SafeAreaView>
      <View style={[Style.bgapp, { width: '100%', height:'100%', alignItems:'center', position: 'relative' }]}>
        {/* <View style={{
          position: 'absolute',
          top: 0,
          zIndex: 100,
          height: 50, 
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center' }}>
          <AppHeader title='Home' />
        </View> */}
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', height: '100%' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom:100 }}>
            <AppWrapper>
              {children}
            </AppWrapper>
          </View>
        </ScrollView>
        <View style={[Style.bgprimary, { 
          position: 'absolute', 
          bottom: 20, 
          height: 50, 
          width: '90%',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center' }]}>
          <BottomMenu />
        </View>
      </View>
    </SafeAreaView>
  )
}