import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Style from '../screens/Style'

type TAppInput = {
  labelText: string,
  errors: any,
  props?: any
}

export const AppInput = ({ labelText, errors=[], ...props }: TAppInput) => {
  return (
    <>
      {/* <Text style={Style.label}>{labelText}</Text> */}
      <TextInput
        style={Style.input}
        {...props} />
      {errors.map((err)=>{
        return <Text style={Style.textColSecondary} key={err}>{err}</Text>
      })}
    </>
  )
}

// export default AppInput