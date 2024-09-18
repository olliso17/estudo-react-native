

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabComponent from './src/routes/tab';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <StackComponent/>

      <TabComponent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})