
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/Home';
import CreateUser from '../../screens/CreateUser';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

type TabNavigation={
  Home:undefined,
  CreateUser:undefined
}

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabComponent() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CreateUser" component={CreateUser} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
