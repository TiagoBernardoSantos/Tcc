import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Serviços({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
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

      </View>
      <View style={styles.subContainer}>
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
    backgroundColor: 'blue',
  },
  subContainer: {
    /*flexDirection: 'column',   */
    width: "100%" /* horinzontal */,
    height: "50%" /* vertical */,
    backgroundColor: 'red',
    flexDirection: 'row',
  },

  icon: {
    top: 20,

  },
  containerPolice: {
    width: "50%" /* horinzontal */,
    height: "100%",
    backgroundColor: 'green',
    alignItems: 'center',
    gap: 10,
  },
  containerAmbulancia: {
    width: "50%" /* horinzontal */,
    height: "100%",
  },
  containerCVV: {
    width: "50%" /* horinzontal */,
    height: "100%",
  },
  containerBombeiros: {
    width: "50%" /* horinzontal */,
    height: "100%",
  },

  txtTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 60,
    color: "#FEB74E",
  },

  button: {
    backgroundColor: "#FEB74E",
    width: '90%',
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
