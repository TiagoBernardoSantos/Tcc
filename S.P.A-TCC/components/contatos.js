import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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

const image = { require: "./assets/map.png" };
/* https://reactnative.dev/docs/imagebackground */

export default function Contatos({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.font}> Contatos </Text>
        <View style={styles.subContainer}>
          <View style={styles.img}>
            <MaterialCommunityIcons
              name="account-circle"
              size={70}
              alignItems="center"
              justifyContent="center"
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.txtnome}> Pai </Text>
            <Text style={styles.txtnumero}> 997012462 </Text>
          </View>
        </View>
        <View style={styles.margin}></View>
        <View style={styles.subContainer}>
          <View style={styles.img}>
            <MaterialCommunityIcons
              name="account-circle"
              size={70}
              alignItems="center"
              justifyContent="center"
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.txtnome}> Mãe </Text>
            <Text style={styles.txtnumero}> 996101888 </Text>
          </View>
        </View>
        <View style={styles.margin}></View>
        <View style={styles.subContainer}>
          <View style={styles.img}>
            <MaterialCommunityIcons
              name="account-circle"
              size={70}
              alignItems="center"
              justifyContent="center"
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.txtnome}> Irmã </Text>
            <Text style={styles.txtnumero}> 997539578 </Text>
          </View>
        </View>
        <View style={styles.margin}></View>

        <View style={styles.subContainerbutton}>
          <View style={styles.button}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="plus"
                size={40}
                color={"white"}
                alignItems="center"
                justifyContent="center"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
/* roda pé: https://www.youtube.com/watch?v=AnjyzruZ36E */
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
    backgroundColor: "#fff",

  },
  margin: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%" /* horinzontal */,
    
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
    backgroundColor: "#114D9D",
    width: 55,
    height: 55,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
