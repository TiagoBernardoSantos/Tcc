import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'


/*import Contacts from './src/pages/Contacts/'
import Information from './src/pages/Information/'
*/
 import Login from './components/login.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <Login />   
    </View>

    /*<NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Contacts" component={Contacts}/>

        <Stack.Screen name="Information" component={Information}/>
      </Stack.Navigator> 

      </Stack>
    </NavigationContainer>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
 
});