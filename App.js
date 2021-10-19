import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginView from "./views/Login.js";

import HomeView from "./views/Home.js";
import AboutView from "./views/About.js";
import PhotoView from "./views/Photo.js";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [userConnected, setUserConnected] = React.useState(false);

  function login() {
    setUserConnected(true);
  }

  if (userConnected) {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          activeColor="#fff"
          inactiveColor="#a8a8a4"
          barStyle={{ backgroundColor: '#3a5790' }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeView}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Photo" 
            component={PhotoView}
            options={{
              tabBarLabel: 'Photo',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="google-photos" color={color} size={26} />
              ),
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return(
      <View>
        <LoginView onLogin={login}/>
      </View>
    );
  }
  
}
