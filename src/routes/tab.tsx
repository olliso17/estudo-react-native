
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CreateUser from '../screens/CreateUser';


const Tab = createBottomTabNavigator();

export type TabNavigation ={
  Home:undefined,
  Login:undefined,
  CreateUser:undefined
}

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabComponent() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="CreateUser" component={CreateUser} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
