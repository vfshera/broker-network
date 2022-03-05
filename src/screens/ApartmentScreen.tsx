import {
  Dimensions,
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
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  DARK_COLOR,
  LIGHT_GRAY_COLOR,
  PRIMARY_COLOR,
  TRANSPARENT_WHITE_COLOR,
} from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { HOME } from "../constants/screens";

const { width, height } = Dimensions.get("window");
const ApartmentScreen = () => {
  const navigation = useNavigation();
  const statuses: number[] = [1, 2, 3, 4, 5];

  const [currentStatus, setStatus] = useState<number>(0);
  const [expandBar, setExpand] = useState<boolean>(false);

  return (
    <ImageBackground
      source={require("@app/assets/images/card-one.webp")}
      resizeMode="cover"
      style={styles.main}
    >
      <View style={styles.cardTint}>
        <SafeAreaView style={styles.safe}>
          <View style={styles.barsContainer}>
            {statuses.map((b, index) => (
              <View
                key={index}
                onTouchEnd={() => {
                  setExpand(false);
                  setStatus(index);
                }}
                onTouchStart={() => setExpand(true)}
                style={[
                  styles.bar,
                  {
                    width: (width * 0.8) / statuses.length,
                    backgroundColor:
                      index == currentStatus ? "white" : DARK_COLOR,
                    height: index == currentStatus && expandBar ? 4 : 3,
                  },
                ]}
              ></View>
            ))}
          </View>
          <View style={styles.header}>
            <AntDesign
              name="left"
              size={20}
              color="white"
              onPress={() => navigation.navigate(HOME)}
            />
            <View style={styles.profileBg}>
              <Image
                source={require("@app/assets/images/card-one.webp")}
                resizeMode="cover"
                style={styles.profileImg}
              ></Image>
            </View>
            <View style={styles.profileText}>
              <Text style={styles.profileTitle}>Array Apartments</Text>
              <Text style={styles.profileName}>Franklin Shera</Text>
            </View>
          </View>
        </SafeAreaView>

        <View style={styles.midGroup}>
          <View style={styles.apartmentContainer}>
            <View>
              <Text style={styles.apartmentText}>Array</Text>
              <Text style={styles.apartmentText}>Apartments</Text>
            </View>

            <Text style={styles.apartmentLocation}>Nairobi,KE</Text>
          </View>

          <View style={styles.brokerageContainer}>
            <Text style={[styles.brokerageText, { fontSize: 32 }]}>3%</Text>
            <Text style={[styles.brokerageText, { fontSize: 14 }]}>
              Brokerage
            </Text>
            <Text style={[styles.brokerageText, { fontSize: 14 }]}>
              on all deals
            </Text>
          </View>

          <View style={styles.smallBtnsContainer}>
            <TouchableOpacity style={[styles.smallBtns]}>
              <Ionicons name="paper-plane-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.smallBtns, { marginTop: 5 }]}>
              <Ionicons name="md-call-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.downloadSection}>
          <Text style={styles.downloadText}>Swipe Up To Download</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ApartmentScreen;

const styles = StyleSheet.create({
  downloadText: {
    fontFamily: "Poppins_500Medium",
    color: "white",
    fontSize: 18,
  },
  downloadSection: {
    backgroundColor: "#4f4a4cfe",
    paddingVertical: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  midGroup: {
    height: height * 0.65,
  },
  bar: {
    backgroundColor: "white",
    height: 3,
    borderRadius: 3,
  },
  barsContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileText: {},
  profileName: {
    fontFamily: "Poppins_500Medium",
    color: "#ffffffbb",
  },
  profileTitle: {
    fontFamily: "Poppins_500Medium",
    color: "white",
    fontSize: 18,
  },
  profileBg: {
    width: 50,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    marginHorizontal: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  },
  safe: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    paddingHorizontal: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    flex: 1,
  },
  cardTint: {
    flex: 1,
    backgroundColor: DARK_COLOR,
    borderRadius: 40,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },

  smallBtns: {
    padding: 15,
    borderRadius: 40,
    width: 65,
    height: 65,
    borderColor: LIGHT_GRAY_COLOR,
    borderWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: LIGHT_GRAY_COLOR,
  },
  smallBtnsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 0,
  },

  brokerageText: {
    fontFamily: "Poppins_500Medium",
    color: "white",
  },
  brokerageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  apartmentLocation: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "white",
    textTransform: "uppercase",
    position: "absolute",
    top: 20,
    right: 20,
  },
  apartmentText: {
    fontSize: 40,
    fontFamily: "Poppins_600SemiBold",
    color: "white",
    lineHeight: 45,
  },
  apartmentContainer: {
    padding: 20,
    position: "relative",
  },
  bookmarkContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});
