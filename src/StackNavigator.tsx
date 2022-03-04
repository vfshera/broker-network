import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import { APARTMENT, HOME, INTRO } from "./constants/screens";
import ApartmentScreen from "./screens/ApartmentScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={INTRO} component={IntroScreen} />
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen
        name={APARTMENT}
        options={{
          transitionSpec: {
            open: apartmentTransition,
            close: apartmentTransition,
          },
        }}
        component={ApartmentScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const apartmentTransition = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
