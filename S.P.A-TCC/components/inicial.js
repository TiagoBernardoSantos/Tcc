import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";

const Tab = createBottomTabNavigator();
const image = { require: ('./assets/map.png') };
/* https://reactnative.dev/docs/imagebackground */

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}
/* roda pé: https://www.youtube.com/watch?v=AnjyzruZ36E */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
