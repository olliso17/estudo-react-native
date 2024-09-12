
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackComponent from './src/assets/routes/stack';
import TabComponent from './src/assets/routes/tab';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <StackComponent/>
    <TabComponent/>
  );
}
