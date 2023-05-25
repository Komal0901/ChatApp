import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Profile from '../Components/Profile';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;
