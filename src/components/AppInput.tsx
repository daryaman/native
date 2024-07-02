import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type TAppInput = {
  labelText: string,
  errors: any,
  props?: any
}

export const AppInput = ({ labelText, errors=[], ...props }: TAppInput) => {
  return (
    <>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={styles.input}
        {...props} />
      {errors.map((err)=>{
        return <Text style={styles.label} key={err}>{err}</Text>
      })}
    </>
  )
}

// export default AppInput

const styles = StyleSheet.create({
  label: {
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 2,
    color: 'white',
    letterSpacing: 1,
  },
  input: {
    color: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingVertical: 2,
  }
});