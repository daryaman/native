import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Messages = (navigation, route) => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})