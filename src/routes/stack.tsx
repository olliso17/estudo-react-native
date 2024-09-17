
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Countre from '../screens/Countre';
import AllCountries from '../screens/AllCountries';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export type StackNavigation={
  Home:undefined,
  Login:undefined,
  Countre: { capital: string }
  AllCountries: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Countre" component={Countre} />
      <Stack.Screen name="AllCountries" component={AllCountries} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
