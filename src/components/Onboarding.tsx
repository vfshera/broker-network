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
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from "react-native";
import React, { FC, LegacyRef, useEffect, useRef, useState } from "react";
import { Octicons, AntDesign } from "@expo/vector-icons";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Onboarding: FC<IOboardingProps> = () => {
  const scrollViewRef = useRef<LegacyRef<ScrollView>>(null);

  const [currentSlide, setSlide] = useState<number>(0);

  const PAGES = [1, 2, 3];

  const scrolled = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != currentSlide) {
        setSlide(slide);
      }
    }
  };

  const skip = () => {
    if (scrollViewRef) {
      scrollViewRef.current.scrollToEnd({ animate: true });
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ backgroundColor: "#ffacbe", flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(ev) => scrolled(ev.nativeEvent)}
        snapToInterval={WIDTH}
        decelerationRate="fast"
        ref={scrollViewRef}
      >
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </ScrollView>
      <View style={styles.swipeBar}>
        <TouchableOpacity
          style={[styles.skipBtn]}
          onPress={() => skip()}
          disabled={PAGES.length == currentSlide + 1}
        >
          <Text
            style={[
              styles.skipText,
              PAGES.length == currentSlide + 1 && styles.dullSkipText,
            ]}
          >
            Skip
          </Text>
        </TouchableOpacity>

        <View style={styles.bars}>
          {PAGES.map((bar, index) => (
            <Octicons
              name="dash"
              size={34}
              key={index}
              style={[styles.bar, currentSlide == index && styles.activeBar]}
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
  dullSkipText: {
    color: "#00000000",
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

  screen: {
    flex: 1,
    width: WIDTH,
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
