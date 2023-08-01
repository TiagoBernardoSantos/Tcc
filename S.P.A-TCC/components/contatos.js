import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const image = { require: ('./assets/map.png') };
/* https://reactnative.dev/docs/imagebackground */

export default function Contatos({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.font}> Contatos </Text>
      
      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="account-plus"
          size={70}
          alignItems="center"
          justifyContent="center"
        />
        <Text style={styles.txtnome}> Pai </Text>
        <Text style={styles.txtnumero}> 997012462 </Text>
      </View>
      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="account-plus"
          size={70}
          alignItems="center"
          justifyContent="center"
        />
        <Text style={styles.txtnome}> Mãe </Text>
        <Text style={styles.txtnumero}> 996101888 </Text>
      </View>
      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="account-plus"
          size={70}
          alignItems="center"
          justifyContent="center"
        />
        <Text style={styles.txtnome}> Irmã </Text>
        <Text style={styles.txtnumero}> 997539578 </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="plus"
          size={35}
          alignItems="center"
          justifyContent="center"

        />

      </TouchableOpacity>
      
    </View>
    </ScrollView>
  );
}
/* roda pé: https://www.youtube.com/watch?v=AnjyzruZ36E */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexFlow: 'row wrap',
    display: 'flex',
  },
  subContainer: {
    /*flexDirection: 'column',   */
    width: '50%',
    marginTop: 50,
    right: 0,
  },
 
  font: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',

  },
  txtnome: {
    flexDirection: 'row',
    display: 'flex',

  },
  button: {
    backgroundColor: '#FEB74E',
    maxWidth: 55,
    maxHeight: 65,
    margin: 70,
    padding: 10,
    borderRadius: 150,
    alignItems: 'center',
  },

})