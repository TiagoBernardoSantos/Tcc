import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Serviços({ navigation }) {
    return (
            <View style={styles.container}>

            <View style={styles.subContainer}>
                <View style={styles.containerPolice}>
                    <MaterialCommunityIcons
                        name="police-station"
                        size={150}
                        color={"black"} />
                        <Text style={styles.txt}>Policia</Text>


                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}
                            onPress={() => navigation.navigate('Instruções')}>
                            Ligar
                        </Text>
                       
                    </TouchableOpacity>
                </View>
                </View>

                <View style={styles.subContainer}>

                <View style={styles.containerAmbulancia}>
                    <MaterialCommunityIcons
                        name="ambulance"
                        size={150}
                        color={"#0000CD"}
                        />
                        <Text style={styles.txt}>Ambulância</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}
                            onPress={() => navigation.navigate('Instruções')}>
                            Ligar
                        </Text>
                        
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.subContainer}>

                <View style={styles.containerCVV}>
                    <MaterialCommunityIcons

                        name="head-heart-outline"
                        size={150}
                        color={"#FFD700"} />
                        <Text style={styles.txt}>CVV</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}
                            onPress={() => navigation.navigate('Instruções')}>
                            Ligar
                        </Text>
                        </TouchableOpacity>
                </View>
            </View>

            <View style={styles.subContainer}>
                <View style={styles.containerBombeiros}>

                    <MaterialCommunityIcons

                        name="fire-alert"
                        size={150}
                        color={"red"} />
                <Text style={styles.txt}>Bombeiros</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.txtButton}
                            onPress={() => navigation.navigate('Instruções')}>
                            Ligar
                        </Text>
                     
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        /* flexDirection: 'row', */
        flexFlow: 'row wrap',
        display: 'flex',
        backgroundColor: '#fff',
        
    },
    containerPolice: {
        left: 0,
        bottom: '10%'
    },
    containerAmbulancia: {
        bottom: '122%',
        left: '100%'
    },
    containerCVV: {
        left: 0,
        top: -500

    },
    containerBombeiros: {
        left: '100%',
        top: -900
    }, 

    txtTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 60,
        color: '#FEB74E',

    },

    button: {
        backgroundColor: '#FEB74E',
        maxWidth: 85,
        maxHeight: 65,
        margin: 40,
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
        alignItems: 'center',
        right: 0,
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
        margin: 15,
        textAlign: 'center'
    },
});