import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import BasketScreen from './src/screens/BasketScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailScreen from './src/screens/DetailsScreen';
import
MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNav() {
  return (
    <NavigationContainer
      independent = {true}
    >
      <Stack.Navigator
        initialRouteName='HomeScreen'
      >
        <Stack.Screen name='Welcome' component={HomeScreen} />
        <Stack.Screen name='Restourant' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <NavigationContainer
    independent = {true}
    >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ "tabBarHideOnKeyboard": "true" }}
      >
        <Tab.Screen
          name="Home"
          component={StackNav}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='home'
                color={"#D31919"}
                size={24}
              />
            ),
            tabBarActiveTintColor: "#D31919"
          }}
        >

        </Tab.Screen>
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: "Search",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='feature-search'
                color={"#D31919"}
                size={24}
              />
            ),
            tabBarActiveTintColor: "#D31919"
          }}
        >

        </Tab.Screen>
        <Tab.Screen
          name="Basket"
          component={BasketScreen}
          options={{
            headerTitle: "Basket",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='basket'
                color={"#D31919"}
                size={24}
              />
            ),
            tabBarActiveTintColor: "#D31919"
          }}
        >

        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='application-settings'
                color={"#D31919"}
                size={24}
              />
            ),
            tabBarActiveTintColor: "#D31919"
          }}
        >
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
