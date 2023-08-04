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


const image = { require: ('../assets/map.png') };
/* https://reactnative.dev/docs/imagebackground */

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subConteiner}>
        <Text style={styles.text}>
          Home
        </Text>
      </View>
      <ImageBackground 
      source={require('../assets/map.png')} 
      style={{width: 400, height: 700}}  
      resizeMode="cover"
      >
      </ImageBackground>
       
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
  subConteiner:{
  backgroundColor: '#114D9D',
  width: "100%",
  height: "40%"
  },
  text:{
    color: '#fff'
  }
});
