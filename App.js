import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  creatStackNavigator,
  createStackNavigator,
} from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

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

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
