
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AllCountries from '../screens/AllCountries';

const Stack = createNativeStackNavigator();

export type StackNavigation={
  Countre: { capital: string }
  AllCountries: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AllCountries">
      <Stack.Screen name="AllCountries" component={AllCountries} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
