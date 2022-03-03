import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, LegacyRef, useEffect, useRef } from "react";
import { Octicons, AntDesign } from "@expo/vector-icons";

interface IOboardingProps {
  pages: any[];
  // pages: { title: string; subtitle: string; image: string }[];
}

const Onboarding: FC<IOboardingProps> = ({ pages }) => {
  const bars = [1, 2, 3];
  let currentBar = 1;
  const [page] = pages;

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require("@app/assets/images/one.webp")}
        resizeMode="cover"
        style={styles.imgBG}
      >
        <SafeAreaView style={styles.overlay}>
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
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.swipeBar}>
        <TouchableOpacity style={styles.skipBtn}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.bars}>
          {bars.map((bar) => (
            <Octicons
              name="dash"
              size={34}
              key={bar}
              style={[styles.bar, currentBar == bar && styles.activeBar]}
              color="black"
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextBtn}>
          <AntDesign
            name="right"
            style={styles.nextIcon}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  nextIcon: {},
  nextBtn: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  skipBtn: {
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
  },
  bars: {
    display: "flex",
    flexDirection: "row",
  },
  bar: {
    marginHorizontal: 5,
    color: "#ffffff55",
  },
  activeBar: { color: "#ffffff" },
  skipText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
  },
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
    fontFamily: "Poppins_600SemiBold",
  },
  imgBG: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#11111122",
  },
  swipeBar: {
    height: 80,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 10,
    position: "absolute",
    bottom: 0,
  },
});
