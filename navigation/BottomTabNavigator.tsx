import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { BottomTabParamList, HomeParamList, CartParamList,ProfileParamList } from '../types';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen'; 
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeParamList>();
const CartScreenStack = createStackNavigator<CartParamList>();
const ProfileScreenStack = createStackNavigator<ProfileParamList>();

function HomeNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: 'Tab One Title' }} />
    </HomeScreenStack.Navigator>
  );
}
 
function CartNavigator() {
  return (
    <CartScreenStack.Navigator>
      <CartScreenStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </CartScreenStack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </ProfileScreenStack.Navigator>
  );
}
