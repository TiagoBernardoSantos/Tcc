import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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

const image = { require: "../assets/map.png" };
/* https://reactnative.dev/docs/imagebackground */

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subConteiner}>
        <Text style={styles.text}>Home</Text>
      </View>

      <ImageBackground
        source={require("../assets/map.png")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.subContainerbutton}>
          <View style={styles.button}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="message-bulleted"
                size={30}
                color={"white"}
                alignItems="center"
                justifyContent="center"
              
                onPress={() => navigation.navigate('Chat')}>

                </MaterialCommunityIcons>
              
              
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      
    </View>
  );
}
/* roda pé: https://www.youtube.com/watch?v=AnjyzruZ36E */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subConteiner: {
    backgroundColor: "#114D9D",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold"
  },
  subContainerbutton: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    margin: 390,
    marginTop: 460,
  },
  button: {
    backgroundColor: "#114D9D",
    width: 55,
    height: 55,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
