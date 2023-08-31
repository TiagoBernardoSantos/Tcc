import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { StatusBar } from "expo-status-bar";
import React from 'react';
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  useState, 
  useEffect,
} from "react-native";


export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View style={styles.subConteiner}>
       
          <Text style={styles.text}>Home</Text>
        


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
      </View>
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
    justifyContent: "center",
  },
  
  text: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  subContainerbutton: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    margin: 390,
    marginTop: 1360,
    marginRight: 50,
  },
  button: {
    backgroundColor: "#114D9D",
    width: 55,
    height: 55,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",

  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height,
  },
});
