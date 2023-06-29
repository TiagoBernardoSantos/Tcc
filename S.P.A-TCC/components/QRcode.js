import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Instrucoes({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}> Compartilhe sua localização com seus amigos e família através do código </Text>
            <Text style={styles.txt}> Você pode compartilhar esse código através de e-mail, mensagem, pessoalmente ou até QR Code </Text>
            <StatusBar style="auto" />
            <TextInput style={styles.formInput}
        keyboardType='web-search'
        autoCapitalize="none"
        autoComplete='street-address'
        placeholder='Pesquise por nome ou endereço...'
      />

            <Image
                style={styles.image}
                source={require('../assets/instru.png')}
            />

            <TouchableOpacity style={styles.formButton}>
                <Text style={styles.txtButton} onPress={() => navigation.navigate('Inicial')}> Próximo </Text>
            </TouchableOpacity>

            <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTxtButton} onPress={()=> navigation.navigate('Inicial')}> Agora não </Text>
        </Pressable>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '80%',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 60,

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
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 25,
        color: 'FEB74E',
    },
});