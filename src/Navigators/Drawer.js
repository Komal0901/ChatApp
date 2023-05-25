import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Components/Home';
import Anand from '../Components/Anand';
import Chitranshi from '../Components/Chitranshi';
import Vijay from '../Components/Vijay';
import Sapna from '../Components/Sapna';
import Aksh from '../Components/Aksh';
import Dhawani from '../Components/Dhawani';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inbox" component={Home} />
      <Drawer.Screen name="Anand" component={Anand} />
      <Drawer.Screen name="Chitranshi" component={Chitranshi} />
      <Drawer.Screen name="Vijay" component={Vijay} />
      <Drawer.Screen name="Sapna" component={Sapna} />
      <Drawer.Screen name="Aksh" component={Aksh} />
      <Drawer.Screen name="Dhawani" component={Dhawani} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
