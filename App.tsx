

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import AllCountries from './src/screens/AllCountries';
import Countre from './src/screens/Countre';
import { Home } from './src/screens/Home';
import Regions from './src/screens/Regions';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="AllCountries" component={AllCountries} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Countre" component={Countre}/>
      <Stack.Screen name="Regions" component={Regions}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})