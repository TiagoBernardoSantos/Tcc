import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Serviços({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                    <View style={styles.subContainer}>
                <View style={styles.containerPolice}>


                        <Image
                            style={styles.image}
                            source={require('../assets/policia.png')}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtButton}
                                onPress={() => navigation.navigate('Instruções')}>
                                Ligar
                            </Text>
                            <MaterialCommunityIcons
                                name="phone"
                                size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerAmbulancia}>
                        <Image
                            style={styles.image1}
                            source={require('../assets/ambulancia.jpg')}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtButton}
                                onPress={() => navigation.navigate('Instruções')}>
                                Ligar
                            </Text>
                            <MaterialCommunityIcons
                                name="phone"
                                size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.subContainer}>

                    <View style={styles.containerCVV}>
                        <Image
                            style={styles.image}
                            source={require('../assets/cvv.png')}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtButton}
                                onPress={() => navigation.navigate('Instruções')}>
                                Ligar
                            </Text>
                            <MaterialCommunityIcons
                                name="phone"
                                size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerBombeiros}>

                        <Image
                            style={styles.image1}
                            source={require('../assets/bombeiro.png')}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.txtButton}
                                onPress={() => navigation.navigate('Instruções')}>
                                Ligar
                            </Text>
                            <MaterialCommunityIcons
                                name="phone"
                                size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}




const styles = StyleSheet.create({
    container: {
        /* flexDirection: 'row', */
        flexFlow: 'row wrap',
        display: 'flex',
        backgroundColor: '#fff',

    },
    image: {
        margin: 15,
        flex: 5,
        width: 155,
        height: 120
    },
    image1: {
        margin: 15,
        flex: 1,
        width: 155,
        height: 150
    },
    containerPolice: {
        left: 0
    },
    containerAmbulancia: {
        bottom: 290,
        left: 165 
    },
    containerCVV: {
        left: 0,
    },
    containerBombeiros: {
        left: '100%',   
    },
  
    txtTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 60,
        color: '#FEB74E',

    },

    button: {
        backgroundColor: '#FEB74E',
        maxWidth: 75,
        maxHeight: 65,
        margin: 30,
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
    },

    txtButton: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },

    subContainer: {
        /*flexDirection: 'column',   */
        width: '50%',
        marginTop: 50,
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