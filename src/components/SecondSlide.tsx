import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const FirstSlide = () => {
  return (
    <ImageBackground
      source={require(`@app/assets/images/two.webp`)}
      resizeMode="cover"
      style={styles.imgBG}
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>.homs</Text>
        </View>

        <View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Awesome</Text>
            <Text style={styles.heading}>office suites</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Time to get going</Text>
            <Text style={styles.info}>they are spacious for teams.</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FirstSlide;

const styles = StyleSheet.create({
  headingContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 50,
    marginBottom: 150,
  },
  info: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
    lineHeight: 20,
  },
  heading: {
    color: "white",
    fontSize: 50,
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 60,
  },
  logoContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    color: "white",
    fontSize: 38,
    fontFamily: "Poppins_600SemiBold",
  },
  imgBG: {
    flex: 1,
    position: "relative",
    width: width,
  },
  overlay: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#11111122",
  },
});
