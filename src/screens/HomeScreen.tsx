import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
    marginTop: 20,
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
