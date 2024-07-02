import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../screens/Style'

type TCard = {
  mtop?: number,
  mbot?: number,
  children?: any,
}

export const AppCard = ({mtop, mbot, children}: TCard) => {
  return (
    <View style={{ width: '90%', marginBottom: mbot, marginTop: mtop }}>
        {children}
    </View>
  )
}

export const AppCardNeutral = ({mtop, mbot, children}: TCard) => {
  return (
    <View style={[Style.bgneutral, Style.card, { marginBottom: mbot, marginTop: mtop }]}>
        {children}
    </View>
  )
}

export const AppCardPrimary = ({mtop, mbot,children}: TCard) => {
  return (
    <View style={[Style.bgprimary, Style.card, { marginBottom: mbot, marginTop: mtop }]}>
        {children}
    </View>
  )
}

export const AppCardSecondary = ({mtop, mbot,children}: TCard) => {
  return (
    <View style={[Style.bgsecondary, Style.card, { marginBottom: mbot, marginTop: mtop }]}>
        {children}
    </View>
  )
}
