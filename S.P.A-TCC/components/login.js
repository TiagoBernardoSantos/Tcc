import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text, TextInput, TouchableOpacity, View
} from 'react-native';

export default function Login({ navigation }) {
  const [input, setImput] = useState('');
  const [hidePass, setHidePass] = useState(true);


  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}> Conecte-se </Text>
      <StatusBar style="auto" />

      <Text style={{ fontSize: 25 }}>E-mail:</Text>
      <TextInput style={styles.formInput}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        maxLength={40}
        placeholder='Digite seu e-mail...'
        value={''}
      />
      <Text style={{ fontSize: 25 }}>Senha:</Text>

      <View style={styles.AreaInput} >

        <TextInput
        style={styles.formInput}
          secureTextEntry={hidePass}
          placeholder='Digite sua senha...'
          value={input}
          maxLength={6}
          onChangeText={(texto) => setImput(texto)}
            />


            <TouchableOpacity style={styles.Icon}
        onPress={() => setHidePass(!hidePass)}>
          {hidePass ?
            <Ionicons name="eye" color="black" size={25} />
            :
            <Ionicons name="eye-off" color="black" size={25} />
          }
        </TouchableOpacity>
        

        
      </View>


      <TouchableOpacity style={styles.formButton}
        onPress={() => navigation.navigate('Bem Vindo')}>
        <Text style={styles.txtButton} > Entrar </Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTxtButton}> Esqueceu sua senha? </Text>
        </Pressable>
      </View>

      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.subTxtButton} > Inscrever-se </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  txtTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 40,
  },
  AreaInput:{
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center'

  },
  formInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '85%',
    padding: 10,
    margin: 10,
    height: 50,
  },
  formButton: {
    backgroundColor: '#114D9D',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  txtButton: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10,
  },
  subTxtButton: {
    color: '#FEB74E',
    marginLeft: 50,
    fontSize: 17,
    alignItems: 'center',
  },
  Icon: {
    width: "15%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

  }

});