import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  creatStackNavigator,
  createStackNavigator,
} from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import PostScreen from "./screens/PostScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDr1m2d1Rpsuov1EBgZ22BoydI3hu2zN_M",
  authDomain: "chatapp-b2f77.firebaseapp.com",
  projectId: "chatapp-b2f77",
  storageBucket: "chatapp-b2f77.appspot.com",
  messagingSenderId: "1041494099373",
  appId: "1:1041494099373:web:1e3b71e41ce2d2c72e0d24",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tinColor }) => (
        <Icon name="arrow-left" size={24} color={tinColor} />
      ),
    },
  },
});

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
