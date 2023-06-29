import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Cadastro from "./components/cadastro";
import Login from "./components/login";
import Inicial from "./components/inicial";
import BV from "./components/telabv";
import Instrucoes from "./components/instrucoes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "", headerTransparent: true, headerLeft: null }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "", headerTransparent: true, headerLeft: null }}
        />

        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{
            title: "Home",
            headerTransparent: false,
            headerLeft: null,
            headerTintColor: "#fff",
            headerFontSize: "300px",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#114D9D", height: 90 },
            headerTitleStyle: { backgroundColor: "#114D9D", fontSize: 30 },
          }}
        />

        <Stack.Screen
          name="Bem Vindo"
          component={BV}
          options={{ title: "", headerTransparent: true, headerLeft: null }}
        />

        <Stack.Screen
          name="Instruções"
          component={Instrucoes}
          options={{ title: "", headerTransparent: true, headerLeft: null }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 8,
  },
});
