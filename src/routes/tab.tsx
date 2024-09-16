
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Countre from '../screens/Countre';
import AllCountries from '../screens/AllCountries';


const Tab = createBottomTabNavigator();

export type TabNavigation ={
  Home:undefined,
  Login:undefined,
  // Countre:undefined
  AllCountries:undefined
}

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabComponent() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="AllCountries">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      {/* <Tab.Screen name="Countre" component={Countre} /> */}
      <Tab.Screen name="AllCountries" component={AllCountries} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
