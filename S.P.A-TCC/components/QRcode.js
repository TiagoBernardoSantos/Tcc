import React, { useState } from 'react';
import { Image } from "expo-image";
import Clipboard from "@react-native-community/clipboard";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";

export default function QRcode({ navigation }) {
  /*typedText: variável que será usada para armazenar o texto digitado pelo usuário.*/
  /*copiedText: variável que será usada para armazenar o texto recuperado da área de transferência.
https://developerplus.com.br/como-copiar-para-area-de-transferencia-no-react-nativeclipboard/
*/

  const [typedText, setTypedText] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = () => {
    Clipboard.setString(typedText);
    alert("Texto Copiado!");
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  }


  return (
    
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        {" "}
        Compartilhe sua localização com seus amigos e família através do código{" "}
      </Text>

      <StatusBar style="auto" />

      <Image style={styles.image} source={require("../assets/QRcode.png")} />

      <TouchableOpacity style={styles.formButton1}>
        <Text style={styles.txtButton1} onPress={() => copyToClipboard()}>
          <MaterialCommunityIcons
            name="content-copy"
            size={20} />
            CCC-6565
        </Text>
      </TouchableOpacity>

      <Text style={styles.txt}>
        {" "}
        Você pode compartilhar esse código através de e-mail, mensagem,
        pessoalmente ou até QR Code{" "}
      </Text>

      <TouchableOpacity style={styles.formButton}
      onPress={() => navigation.navigate('Home')} >
        <Text
          style={styles.txtButton}
        >
          {" "}
          Próximo{" "}
        </Text>
      </TouchableOpacity>

      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: "30%",
    margin: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
  },
  formButton: {
    backgroundColor: "#114D9D",
    width: "80%",
    margin: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  formButton1: {
    backgroundColor: "#FEB74E",
    width: "50%",
    margin: 20,
    padding: 15,
    borderRadius: 80,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 9.11,
    elevation: 14,
  },

  txtButton: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  txtButton1: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  subButton: {
    padding: 0,
  },
  subTxtButton: {
    color: "#FEB74E",
    marginLeft: 120,
    fontSize: 17,
    alignItems: "center",
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 25,
    color: "#FEB74E",
  },
});
