import { Button, ImageBackground, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { AuthProvider } from '../hooks/UserContext'
import { AppWrapper } from '../hooks/UserContext'
import BottomMenu from '../partials/BottomMenu'

export default function Layout({ children }: any) {

  return (
    <SafeAreaView>
      <View style={{ width: '100%', backgroundColor: '#111313' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', height: '100%' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom:50 }}>
            <AppWrapper>
              {children}
            </AppWrapper>
          </View>
        </ScrollView>
        <View style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          height: 50, 
          backgroundColor: '#0064fa', 
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center' }}>
          <BottomMenu />
        </View>
      </View>
    </SafeAreaView>
  )
}