import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import OAuth from '../partials/OAuth';
import Test from './Test';
import LoginAs from './LoginAs';
import UserData from './users/UserData';
import UbahData from './users/UbahData';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import BuyCoffee from './BuyCoffee';
import Messages from './users/Messages';
import Splash from './Splash';
import Style from './Style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MakeOrder from './users/MakeOrder';

const Stack = createNativeStackNavigator();

const App = () => {

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={({ navigation }) => ({
          statusBarColor: '#6099f2',
          headerBackVisible: false,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fcfcf8',
          },
          headerTintColor: '#6099f2',
          headerTitleStyle: {
            fontFamily: 'GemunuLibre-Light',
            fontSize: 24,
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Feather name='coffee' size={32} onPress={() => navigation.navigate('BuyCoffee')}
                style={Style.textColSecondary} />
              <MaterialCommunityIcons name='dots-vertical' size={32} onPress={() => setModalVisible(true)}
                style={Style.textColPrimary} />
            </View>
          ),
        })}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="LoginAs"
          component={LoginAs}
          options={{ title: 'Masuk sebagai' }}
          />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Order"
          component={MakeOrder}
          options={{ title: 'Pilih lokasi' }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{ title: 'Pesan' }}
        />
        <Stack.Screen
          name="UserData"
          component={UserData}
          options={{ title: 'Profil' }}
        />
        <Stack.Screen
          name="UbahData"
          component={UbahData}
          options={{ title: 'Ubah' }}
        />
        <Stack.Screen
          name="OAuth"
          component={OAuth}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="BuyCoffee"
          component={BuyCoffee}
          options={{ title: 'Traktir' }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
        />
      </Stack.Navigator>

      {/* Modal =================================================================== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello, I am a modal!</Text>
            <Button
              title="Hide Modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
      {/* Modal =================================================================== */}

    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});