import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Serviços({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>

             <Image
                style={styles.image}
                source={require('../assets/policia.png')}
            />

            <TouchableOpacity style={styles.formButton}>
                <Text style={styles.txtButton} onPress={() => navigation.navigate('Instruções')}> Ligar </Text>
                <MaterialCommunityIcons
                name="telephone"
                size={20} />
            </TouchableOpacity> 
            </View>
            
            <View style={styles.subContainer}>
             <Image
                style={styles.image}
                source={require('../assets/ambulancia.png')}
            />

            <TouchableOpacity style={styles.formButton}>
                <Text style={styles.txtButton} onPress={() => navigation.navigate('Instruções')}> Ligar </Text>
            </TouchableOpacity> 
            </View>

            <View style={styles.subContainer}>
             <Image
                style={styles.image}
                source={require('../assets/cvv.png')}
            />

            <TouchableOpacity style={styles.formButton}>
                <Text style={styles.txtButton} onPress={() => navigation.navigate('Instruções')}> Ligar </Text>
            </TouchableOpacity> 
            </View>

            <View style={styles.subContainer}>
             <Image
                style={styles.image}
                source={require('../assets/bombeiro.png')}
            />

            <TouchableOpacity style={styles.formButton}>
                <Text style={styles.txtButton} onPress={() => navigation.navigate('Instruções')}> Ligar </Text>
            </TouchableOpacity> 
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    image: {
        margin: 15,
        flex: 1,
        width: '70%',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 60,
        color: '#FEB74E',

    },

    formButton: {
        backgroundColor: '#FEB74E',
        width: '50%',
        margin: 30,
        padding: 10,
        borderRadius: 70,
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
    },
});