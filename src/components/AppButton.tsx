import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type TAppButton = {
  onPress?: any,
  icon?: string,
  iconSize?: number,
  buttonColor?: string,
  buttonText?: string,
  textColor?: string,
}

const AppButton = ({ onPress, icon, iconSize, buttonColor, buttonText, textColor }: TAppButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: buttonColor, flexDirection: 'row', gap: 10 }]}>
      {icon ? <FontAwesome name={icon} size={iconSize} color={textColor} /> : ''}
      <Text style={[styles.text, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

type TAppButtonPrimary = {
  onPress?: any,
  icon?: string,
  iconSize?: number,
  buttonText?: string,
}

export const AppButtonPrimary = ({ onPress, icon, iconSize, buttonText }: TAppButtonPrimary) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: '#0064fa', flexDirection: 'row', gap: 10 }]}>
      {icon ? <FontAwesome name={icon} size={iconSize} color='#ececff' /> : ''}
      <Text style={[styles.text, { color: 'white' }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const AppButtonSecondary = ({ onPress, icon, iconSize, buttonText }: TAppButtonPrimary) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: '#fa9600', flexDirection: 'row', gap: 10 }]}>
      {icon ? <FontAwesome name={icon} size={iconSize} color='#ececff' /> : ''}
      <Text style={[styles.text, { color: 'white' }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

type TAppButtonSquare = {
  onPress?: any,
  icon?: string,
  iconName?: string,
  iconSize?: number,
  iconColor?: string,
  buttonText?: string,
}

export const AppButtonSquare = ({ onPress, icon, iconName, iconSize, iconColor, buttonText }: TAppButtonSquare) => {
  return (
    <>
      <TouchableOpacity style={styles.buttonSquare}>
        { icon == 'Ionicons' ? <Ionicons onPress={onPress} name={iconName} size={iconSize}  color={iconColor} /> : ''}
        { icon == 'FontAwesome' ? <FontAwesome onPress={onPress} name={iconName} size={iconSize} color={iconColor} /> : ''}
        { icon == 'MaterialCommunityIcons' ? <MaterialCommunityIcons onPress={onPress} name={iconName} size={iconSize}  color={iconColor} /> : ''}
        <Text style={styles.textSquare}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
    elevation: 8,
    shadowColor: 'white',
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  buttonSquare: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 94,
    height: 94,
    borderRadius: 4,
    backgroundColor: '#0064fa',
  },
  text: {
    fontWeight: '300',
    fontSize: 18,
    letterSpacing: 1
  },
  textSquare: {
    color: 'white',
    fontWeight: '300',
    letterSpacing: 1
  }
})

export default AppButton