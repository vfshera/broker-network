import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PRIMARY_COLOR } from "../constants/colors";

const Loader = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Loader</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
