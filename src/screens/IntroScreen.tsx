import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Onboarding from "../components/Onboarding";

const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Onboarding />
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  img: {
    height: "100%",
    width: "100%",
  },
});
