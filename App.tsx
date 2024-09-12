
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabComponent from './src/routes/tab';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <StackComponent/>
    <TabComponent/>
  );
}
