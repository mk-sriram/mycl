import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const profilePictures = [
  { id: "1", uri: require("../assets/images/profilePics/image1.jpg") },
  { id: "2", uri: require("../assets/images/profilePics/image2.jpg") },
  { id: "3", uri: require("../assets/images/profilePics/image3.jpg") },
  { id: "4", uri: require("../assets/images/profilePics/image4.jpg") },
  { id: "5", uri: require("../assets/images/profilePics/image5.jpg") },
  { id: "6", uri: require("../assets/images/profilePics/image6.jpg") },
  { id: "7", uri: require("../assets/images/profilePics/image7.jpg") },
  { id: "8", uri: require("../assets/images/profilePics/image8.jpg") },
  { id: "9", uri: require("../assets/images/profilePics/image9.jpg") },
];

const SearchHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.actionRowButton}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
                <Ionicons name="search" size={24} />
                <View>
                  <Text style={{ color: "#000", fontFamily: "mon-sb" }}>
                    Search
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.profileContainerWrapper}>
          <LinearGradient
            colors={["rgba(240, 255, 255, 1)", "rgba(240, 255, 255, 0)"]}
            style={styles.gradientLeft}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <FlatList
            data={profilePictures}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.profilePicture}>
                <Image source={item.uri} style={styles.profileImage} />
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.profileContainer}
          />
          <LinearGradient
            colors={["rgba(255, 255, 255, 0)", "#fff"]}
            style={styles.gradientRight}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 170,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 10, // Add padding to fit the profile images better
  },
  actionRowButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    width: "100%",
    marginTop: 10,
  },
  searchBtn: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 10,
    padding: 7,
    alignItems: "center",
    width: 350,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 10,
    elevation: 2,
  },
  profileContainerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10, // Add padding for better spacing
  },
  profilePicture: {
    marginRight: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  gradientLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 30,
    zIndex: 1,
  },
  gradientRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 40,
    zIndex: 1,
  },
});

export default SearchHeader;
