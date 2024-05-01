import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider'

import { ModalPassword } from '../../components/modal/index.js'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUV1234567890!@#$"

export function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("") 
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = '';
    for(let i = 0, m = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * m));
    }

    setPasswordValue(password)
    setModalVisible(true)

  }

  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <Image style={styles.logo}
      source={require("../../assets/logo.png")}
      />

      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
      <Slider
        style={{ height: 50 }}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#5865F2'
        minimumTrackTintColor='#5865F2'
        thumbTintColor='#5865F2'
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0))}
      />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2F33",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 60,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: -19,
    fontWeight: 'bold',
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#43474d',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#5865F2",
    width: '80%',
    height: 50,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  }
});
