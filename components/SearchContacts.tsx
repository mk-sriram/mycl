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


const SearchContacts = () => {
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 80,
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

export default SearchContacts;
