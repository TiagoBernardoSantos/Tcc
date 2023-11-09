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

function Perfil() {
  const [cd_usuario, setcd_usuario] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');


  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState('');
  

  useEffect(() => {
    async function recuperarId() {
        const value = await AsyncStorage_ID.getItem('IdPsicologo')
        setId(value)
    }
    recuperarId()
    getInformacoesBD()
}, [id]);

async function getInformacoesBD() {
  setLoading(true);
  var url = 'https://libellatcc.000webhostapp.com/getInformacoes/getInformacoesBD.php';
  var wasServerTimeout = false;
  var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
  }, timeOut);
  const resposta = fetch(url, {
    method: 'POST', //tipo de requisição
    body: JSON.stringify({ IdPsicologo: id }),
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => {
  timeout && clearTimeout(timeout);
  if (!wasServerTimeout) {
      return response.json();
  }
})
.then((responseJson) => {
  // Recolhendo as informações do banco de dados e salvando nas váriaveis
    setcd_usuario(responseJson.informacoes[0].cd_usuario);
    setEmail(responseJson.informacoes[0].email);
    setNome(responseJson.informacoes[0].nome);
    setTelefone(responseJson.informacoes[0].telefone);
    setSenha(responseJson.informacoes[0].senha);
            
})
//se ocorrer erro na requisição ou conversão
.catch((error) => {
  timeout && clearTimeout(timeout);
  if (!wasServerTimeout) {
      Alert.alert("Alerta!", "Tempo de espera do servidor excedido!");
  }

});
setLoading(false);
}
}


export default
function Perfil({ navigation }) {
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
{/* <text>
{route.params.nome}
</text> */}
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
