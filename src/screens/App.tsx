import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import OAuth from '../partials/OAuth';
import Test from './Test';
import LoginAs from './LoginAs';
import UserData from './users/UserData';
import UbahData from './users/UbahData';
import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BuyCoffee from './BuyCoffee';
import Messages from './users/Messages';

const Stack = createNativeStackNavigator();

const App = () => {

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
          statusBarColor: '#6099f2'
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="LoginAs"
          component={LoginAs}
          options={{ title: 'Masuk sebagai' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
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
          options={{ title: 'Tks' }}
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
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, { marginBottom: 24, fontWeight: 'bold' }]}>Traktir developer dengan :</Text>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', marginBottom: 24 }}>
              <Text>Kopi  X </Text>
              <TextInput style={{ paddingVertical: 1, borderBottomWidth: 1, borderBottomColor: 'grey' }} />
              <Text style={{
                borderRadius: 30,
                paddingVertical: 8,
                paddingHorizontal: 12,
                backgroundColor: 'tomato',
                color: 'white'
              }}
              >1</Text>
              <Text>2</Text>
              <Text>3</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Traktir</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Modal =================================================================== */}

    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
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
    padding: 24,
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
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'tomato',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});