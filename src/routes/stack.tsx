
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../../screens/Login';
import Countre from '../../screens/Countre';


const Stack = createNativeStackNavigator();

type StackNavigation={
  Home:undefined,
  Countre:undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Countre" component={Countre} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
