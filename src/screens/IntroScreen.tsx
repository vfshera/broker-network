import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Onboarding from "../components/Onboarding";

const IntroScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Onboarding
        pages={[
          {
            image: require("@app/assets/images/one.webp"),
            title: "Onboarding 1",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            image: require("@app/assets/images/two.webp"),
            title: "Onboarding 2",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
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
