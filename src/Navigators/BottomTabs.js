import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Components/Home';
import About from '../Components/About';
import Profile from '../Components/Profile';
import Contact from '../Components/Contact';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyDrawer from './Drawer';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MyDrawer}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="mail" size={30} color={'red'} />
            ) : (
              <Ionicons name="mail" size={30} color={'blue'} />
            ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="chatbox" size={30} color={'red'} />
            ) : (
              <Ionicons name="chatbox" size={30} color={'blue'} />
            ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="people" size={30} color={'red'} />
            ) : (
              <Ionicons name="people" size={30} color={'blue'} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="videocam" size={30} color={'red'} />
            ) : (
              <Ionicons name="videocam" size={30} color={'blue'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
