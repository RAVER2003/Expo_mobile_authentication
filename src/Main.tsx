import React from 'react'
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "@/Screens/OnboardingScreen";
import LoginScreen from "@/Screens/LoginScreen";
import RegisterScreen from "@/Screens/RegisterScreen";
import { useContext } from "react";
import { AuthContext } from './context/AuthContext';
import Main_app from './Screens/Main_app';
const LoginStack = createStackNavigator();
const AppStack = createStackNavigator();
const Main = () => {
    const {authState}=useContext(AuthContext);
  return (
    <NavigationContainer>
      {authState.authenticated===null?<LoginStack.Navigator screenOptions={{headerShown:false}}> 
        <LoginStack.Screen name="Home" component={OnboardingScreen} />
        <LoginStack.Screen name="Login" component={LoginScreen} />
        <LoginStack.Screen name="Register" component={RegisterScreen} />
      </LoginStack.Navigator>:<AppStack.Navigator screenOptions={{headerShown:false}}> 
        <AppStack.Screen name="Home" component={Main_app} />
      </AppStack.Navigator>}
      
    </NavigationContainer>
  )
}

export default Main