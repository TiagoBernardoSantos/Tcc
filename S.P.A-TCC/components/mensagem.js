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

export default function Mensagem({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subConteinerChat}>
      <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color= "white"
        />
        <View style={styles.icon}>
        <MaterialCommunityIcons name="account-circle" size={60} />
       <Text style={styles.text}>Mãe</Text> 
       </View>
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    gap: 2,
    backgroundColor: "#fff",
  },
  subContainer: {
    /*flexDirection: 'column',   */
    width: "100%" /* horinzontal */,
    height: 150 /* vertical */,
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
  },
  subConteinerChat: {
    backgroundColor: "#ADABAA",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 40,
    paddingTop: 20,
    paddingHorizontal: 20, /* espaçamento horizontal */
  },
  margin: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%" /* horinzontal */,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  img: {
    /*flexDirection: 'column',   */
  },

  font: {
    color: "black",
    fontSize: 35,
    marginTop: 20,
  },
  txtnome: {
    flexDirection: "row",
    display: "flex",
    fontSize: 30,
  },
  txtnumero: {
    flexDirection: "row",
    display: "flex",
    fontSize: 20,
  },
  subContainerbutton: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    margin: 30,
  },
  button: {
    backgroundColor: "red",
    width: 55,
    height: 55,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
