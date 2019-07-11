import {createStackNavigator, createDrawerNavigator} from "react-navigation";
import {Easing,Animated} from "react-native";

import Home from "./Home";
import Details from "./Details";
import AdminPannel from './AdminPannel';
import AdminPost from './AdminPost';
import Check from './CheckApi';

import SlideMenu from '../slideMenu/SlideMenu';

import About from '../screen/About';
import Story from '../screen/Story';
const transitionConfig = () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(10)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
  
        const thisSceneIndex = scene.index;
        const width = layout.initWidth;
  
        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0]
        });
  
        return { transform: [{ translateX }] };
      }
    };
  };

const AppNavigator = createStackNavigator(
  {

    Home: { screen: Home },
    Details: { screen: Details},
    SlideMenu: { screen: SlideMenu},
    About: { screen: About},
    Story : { screen: Story},
    AdminPost : {screen: AdminPost },
    AdminPannel : { screen: AdminPannel},
    Check: { screen: Check},
  },
  {
    transitionConfig
  }
);
const Drawer = createDrawerNavigator(
  {
    AppNavigator: { screen: AppNavigator }
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 200
  }
);
export default Drawer;