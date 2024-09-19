

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import AllCountries from './src/screens/AllCountries';
import Countre from './src/screens/Countre';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AllCountries">
      <Stack.Screen name="AllCountries" component={AllCountries} />
      <Stack.Screen name="Countre" component={Countre}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})