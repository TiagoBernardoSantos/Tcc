import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txtTitle: {
    fontSize: 36,
    fontWeight: "bold",
    margin: 40,
  },
  formInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: "80%",
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: "#114D9D",
    width: "80%",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  txtButton: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
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
});
