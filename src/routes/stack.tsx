
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export type StackNavigation={
  Countre: { capital: string }
  AllCountries: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

