
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Countre from '../screens/Countre';
import AllCountries from '../screens/AllCountries';


const Tab = createBottomTabNavigator();

export type TabNavigation = {
 
  Countre: { capital: string }
  AllCountries: undefined
}

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="AllCountries">
        <Tab.Screen name="AllCountries" component={AllCountries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
