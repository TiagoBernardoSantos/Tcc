import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } 
from 'react-native';

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}> Inscrever-se </Text>
      <StatusBar style="auto" />
      <Text style={{fontSize: 17}}>E-mail:</Text>
      <TextInput style={styles.formInput}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder='Digite seu e-mail...'
        autoComplete="email"
        
      />
      <Text style={{fontSize: 17}} >Senha:</Text>
      <TextInput style={styles.formInput}
        secureTextEntry
        autoCapitalize="none"
        placeholder='Digite sua senha...'
        autoComplete="password"
      />

      <Text style={{fontSize: 17}}>Nome Completo:</Text>
      <TextInput style={styles.formInput}
        autoCapitalize="none"
        placeholder='Digite seu nome completo...'
        autoComplete="name"
        
      />

      <TouchableOpacity style={styles.formButton}
      onPress={()=> navigation.navigate('Home')}>
        <Text style={styles.txtButton}> Entrar </Text>
      </TouchableOpacity>

        <View style={styles.subContainer}>
        <Pressable style={styles.subButton}
        onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.subTxtButton} > Já possui uma conta?</Text>
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
  },
  txtTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    margin: 40,
  },
  formInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
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
    fontSize: 22,
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
});
