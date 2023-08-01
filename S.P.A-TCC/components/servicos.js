import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

export default function Serviços({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>

        {/* policia */}
        <View style={styles.containerPolice}>
          <MaterialCommunityIcons
            name="police-station"
            size={150}
            color={"black"}
            style = {styles.icon}
          />
          <Text style={styles.txt}>Policia</Text>

          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.txtButton}
              onPress={() => navigation.navigate("Instruções")}
            >
              Ligar
            </Text>
          </TouchableOpacity>
        </View>

        {/* ambulancia */}
        <View style={styles.containerAmbulancia}>
       <MaterialCommunityIcons
            name="ambulance"
            size={150}
            color={"#0000CD"}
            style = {styles.icon}

          />
          <Text style={styles.txt}>Ambulância</Text>


          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.txtButton}
              onPress={() => navigation.navigate("Instruções")}
            >
              Ligar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* cvv */}
      <View style={styles.subContainer}>
      <View style={styles.containerCVV}>
          <MaterialCommunityIcons
            name="head-heart-outline"
            size={150}
            color={"#FFD700"}
            style = {styles.icon}

          />
          <Text style={styles.txt}>CVV</Text>

          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.txtButton}
              onPress={() => navigation.navigate("Instruções")}
            >
              Ligar
            </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.containerBombeiros}>
          <MaterialCommunityIcons 
          name="fire-alert" 
          size={150} 
          color={"red"} 
          style = {styles.icon}
          />
          <Text style={styles.txt}>Bombeiros</Text>

          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.txtButton}
              onPress={() => navigation.navigate("Instruções")}
            >
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
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center" /* horizontal */,
    justifyContent: "flex-start" /* vertical */,
  },

  subContainer: {
    /*flexDirection: 'column',   */
    width: "100%" /* horinzontal */,
    height: "50%" /* vertical */,
    flexDirection: 'row',
    gap: 6,

  },

  icon: {
    top: 20,

  },
  containerPolice: {
    width: "50%" /* horinzontal */,
    height: "100%",
    alignItems: 'center',
    top: 60,
  },
  containerAmbulancia: {
    width: "50%" /* horinzontal */,
    height: "100%",
    alignItems: 'center',
    top: 60,
  },
  containerCVV: {
    width: "50%" /* horinzontal */,
    height: "100%",
    alignItems: 'center',
  },
  containerBombeiros: {
    width: "50%" /* horinzontal */,
    height: "100%",
    alignItems: 'center',

  },

  txtTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 60,
    color: "#FEB74E",
  },

  button: {
    backgroundColor: "#FEB74E",
    width: '80%',
    borderRadius: 6,
    alignItems: 'center',
  },

  txtButton: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  subButton: {
    padding: 10,
  },

  subTxtButton: {
    color: "#FEB74E",
    marginLeft: 50,
    fontSize: 17,
    alignItems: "center",
  },

  txt: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 15,
    textAlign: "center",
  },
});
