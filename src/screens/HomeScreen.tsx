import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.head}>
        <Text style={styles.headText}>Projects</Text>
      </View>
      <View style={styles.topTab}>
        <TouchableOpacity style={styles.tab}>
          <Feather name="bookmark" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, { paddingHorizontal: 20 }]}>
          <Text style={styles.tabText}>Whole list</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, { paddingHorizontal: 20, borderWidth: 0 }]}
        >
          <Text style={styles.tabText}>Site visits</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <ImageBackground
          source={require("@app/assets/images/card-one.webp")}
          resizeMode="cover"
          style={styles.card}
          imageStyle={{
            borderRadius: 40,
          }}
        >
          <View style={styles.cardTint}>
            <View style={styles.bookmarkContainer}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  {
                    marginLeft: "auto",
                    width: 60,
                    height: 60,
                    borderColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Feather name="bookmark" size={24} color="white" />
              </TouchableOpacity>
            </View>

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

            <View style={styles.bottomButtonsContainener}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  {
                    paddingHorizontal: 40,
                    borderColor: "white",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <Feather name="file" size={24} color="black" />
                <Text style={[styles.tabText, { marginLeft: 5 }]}>
                  Whole list
                </Text>
              </TouchableOpacity>

              <View style={styles.smallBtnsContainer}>
                <TouchableOpacity style={[styles.tab, styles.smallBtns]}>
                  <Ionicons
                    name="paper-plane-outline"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tab, styles.smallBtns, { marginLeft: 5 }]}
                >
                  <Ionicons name="md-call-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  smallBtns: {
    width: 65,
    height: 65,
    borderColor: "#60697055",
    borderWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#606970dd",
  },
  smallBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomButtonsContainener: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 10,
    width: "100%",
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
  cardTint: {
    flex: 1,
    backgroundColor: "#11111144",
    borderRadius: 40,
    position: "relative",
  },
  card: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  cardContainer: {
    width: width,
    height: height * 0.58,
    padding: 10,
  },
  safe: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    backgroundColor: "#fbfbfb",
    flex: 1,
  },
  head: {
    width: width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  headText: {
    fontSize: 40,
    fontFamily: "Poppins_600SemiBold",
  },
  topTab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  tab: {
    padding: 15,
    borderColor: "#111",
    borderWidth: 1,
    borderRadius: 40,
  },
  tabText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
});
