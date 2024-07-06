import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Style from "../screens/Style";

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
    <TouchableOpacity onPress={onPress} style={[Style.button, { backgroundColor: buttonColor, flexDirection: 'row', gap: 10 }]}>
      {icon ? <FontAwesome name={icon} size={iconSize} color={textColor} /> : ''}
      <Text style={[Style.buttonText, { color: textColor }]}>{buttonText}</Text>
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
    <TouchableOpacity onPress={onPress} style={[Style.button, Style.bgprimary, { flexDirection: 'row', gap: 10 }]}>
      {icon ? <FontAwesome name={icon} size={iconSize} color='#ececff' /> : ''}
      <Text style={Style.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const AppButtonSecondary = ({ onPress, icon, iconSize, buttonText }: TAppButtonPrimary) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Style.button, Style.bgsecondary, { flexDirection: 'row', gap: 10 }]}>
      {icon ? <FontAwesome name={icon} size={iconSize} color='#ececff' /> : ''}
      <Text style={Style.buttonText}>{buttonText}</Text>
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
      <TouchableOpacity style={[styles.buttonSquare, Style.bgprimary]}>
        { icon == 'Ionicons' ? <Ionicons onPress={onPress} name={iconName} size={iconSize}  color={iconColor} /> : ''}
        { icon == 'FontAwesome' ? <FontAwesome onPress={onPress} name={iconName} size={iconSize} color={iconColor} /> : ''}
        { icon == 'MaterialCommunityIcons' ? <MaterialCommunityIcons onPress={onPress} name={iconName} size={iconSize}  color={iconColor} /> : ''}
        <Text style={styles.textSquare}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonSquare: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 94,
    height: 94,
    borderRadius: 4,
  },
  textSquare: {
    color: 'white',
    fontWeight: '300',
    letterSpacing: 1
  }
})

export default AppButton