import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <MaterialCommunityIcons
            name="account-plus"
            size={70}
            alignItems="center"
            justifyContent="center"
          />
          <Text style={styles.font}> Seu nome </Text>
        </View>
<text>
{route.params.nome}
</text>
        <TextInput
          style={styles.formInput}
          keyboardType="name"
          autoCapitalize="none"
          placeholder="Nome"
        />

        {/* passagem de informações */}
        <TextInput
          style={styles.formInput}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          placeholder="E-mail"
        />

        <TextInput
          style={styles.formInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Senha"
          autoComplete="password"
        />

        <TextInput
          style={styles.formInput}
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoComplete="tel"
          placeholder="Telefone"
        />

        <TextInput
          style={styles.formInput}
          autoCapitalize="none"
          placeholder="Idioma"
        />
        <TextInput
          style={styles.formInput}
          autoCapitalize="none"
          placeholder="Notificação"
        />

        <View style={styles.formInput}>
          <Pressable style={styles.subButton}>
            <Text
              style={styles.subTxtButton}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <MaterialCommunityIcons name="account-remove" size={20} /> Apagar
              Perfil{" "}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
/* roda pé: https://www.youtube.com/watch?v=AnjyzruZ36E */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  subContainer: {
    backgroundColor: "#114D9D",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  formInput: {
    borderColor: "black",
    backgroundColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    width: "90%",
    padding: 10,
    margin: 10,
  },

  subButton: {
    padding: 5,
  },
  subTxtButton: {
    color: "#424242",
    fontSize: 17,
    alignItems: "center",
  },

  font: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
