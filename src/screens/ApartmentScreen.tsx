import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const ApartmentScreen = () => {
  return (
    <ImageBackground
      source={require("@app/assets/images/card-one.webp")}
      resizeMode="cover"
      style={styles.main}
    ></ImageBackground>
  );
};

export default ApartmentScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
