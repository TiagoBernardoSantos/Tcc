import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import * as Contacts from 'expo-contacts';

export default function Contatos({ navigation }) {
  // state para contatos
  const [contatos, setContatos] = useState([]);
  const [contatosAdd, setContatosAdd] = useState([]);
  const [inMemoryContacts, setinMemoryContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    (async () => {
      // pede permissão de acesso
      const { status } = await Contacts.requestPermissionsAsync();
      // verifica permissão, se é permitido
      if (status === "granted") {
        //indicar que está processando
        setLoading(true);
        // obtem os contatos
        const { data } = await Contacts.getContactsAsync({
          //fields: [Contacts.Fields.Emails],
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        setContatos(data);
        setinMemoryContacts(data);
      }
    })();
  }, []);

  searchContacts = (value) => {
    setSearching(true)
    const filteredContacts = inMemoryContacts.filter((contact) => {
      let contactLowercase = (
        contact.firstName +
        " " +
        contact.lastName
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    setContatos(filteredContacts);

   
  };

  const clickItemFlatList = (item) => {
    setContatosAdd(item);
    console.log(contatosAdd)
  };

  return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#dddddd"
          style={{
            backgroundColor: "#2f363c",
            height: 50,
            fontSize: 25,
            padding: 10,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
            
          }}
          onChangeText={(value) => searchContacts(value)}
        />
        {searching ? (
          <FlatList
            data={contatos}
            renderItem={({ item }) => (
              <View style={{ minHeight: 70, padding: 5 }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 26 }}
                >
                  {item.firstName + " "}
                  {item.lastName}
                </Text>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {item.phoneNumbers[0].number}
                </Text>
                <TouchableOpacity onPress={() => clickItemFlatList(item)}>
                  <Text>Adicionarar</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
                }}
              >
                <Text style={{ color: "#bad555" }}>No Contacts Found</Text>
              </View>
            )}
          />
        ) : (
          <View>
            <FlatList
            data={contatosAdd}
            renderItem={({ item }) => (
              <View style={{ minHeight: 70, padding: 5 }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 26 }}
                >
                  {item.firstName + " "}
                  {item.lastName}
                </Text>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {item.phoneNumbers[0].number}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
                }}
              >
              </View>
            )}
          />
          </View>
        )}
      </View>
  );
};
/* roda pé: https://www.youtube.com/watch?v=AnjyzruZ36E */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    gap: 2,
    backgroundColor: "#fff",
    gap: 40,
    paddingHorizontal: 20,
    marginTop: 30,
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
