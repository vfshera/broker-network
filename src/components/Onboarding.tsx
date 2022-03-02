import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, LegacyRef, useEffect, useRef } from "react";

interface IOboardingProps {
  pages: any[];
  // pages: { title: string; subtitle: string; image: string }[];
}

const Onboarding: FC<IOboardingProps> = ({ pages }) => {
  const [page] = pages;

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("@app/assets/images/one.webp")}
        resizeMode="cover"
        style={styles.imgBG}
      >
        <View style={styles.overlay}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>.homs</Text>
          </View>

          <View>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Find</Text>
              <Text style={styles.heading}>the perfect</Text>
              <Text style={styles.heading}>place</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>Post your requirements</Text>
              <Text style={styles.info}>and get highly relevant matches.</Text>
            </View>
            <View style={styles.swipeBar}>
              <TouchableOpacity>
                <Text>Skip</Text>
              </TouchableOpacity>

              <View>
                <Text>Bars</Text>
              </View>

              <TouchableOpacity>
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  headingContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  info: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    lineHeight: 20,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontFamily: "Poppins_500Medium",
    lineHeight: 45,
  },
  screen: {
    flex: 1,
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
    fontFamily: "Poppins_500Medium",
  },
  imgBG: {
    flex: 1,
  },
  overlay: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#11111122",
  },
  swipeBar: {
    // backgroundColor: "#ff0000",
    height: 80,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
