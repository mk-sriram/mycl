import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const UserProfile: React.FC = () => {
  const navigation = useNavigation();

  // Placeholder data for Sriram MK
  const profileData = {
    name: "Sriram MK",
    phone: "(555) 555-5555",
    email: "sriram@example.com",
    address: "123 Example Lane",
    statusMessage: "Feeling happy 😃",
    rank: "1",
    birthday: "Oct 10",
    age: 21,
    avgTextsPerDay: 4.3,
    textChangePercentage: 16,
    lastSpokeHours: 12,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/profilePics/image1.jpg")} // Update with the correct image path
          style={styles.profileImage}
        />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.contactInfo}>{profileData.phone}</Text>
        <Text style={styles.contactInfo}>{profileData.email}</Text>
        <Text style={styles.contactInfo}>{profileData.address}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusMessage}>{profileData.statusMessage}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>{profileData.rank}</Text>
          <Text style={styles.detailSubtitle}>RANK</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>{profileData.birthday}</Text>
          <Text style={styles.detailSubtitle}>BIRTHDAY</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>{profileData.age}</Text>
          <Text style={styles.detailSubtitle}>YEARS OLD</Text>
        </View>
      </View>
      <View style={styles.communicationContainer}>
        <Text style={styles.communicationTitle}>COMMUNICATION</Text>
        <Text style={styles.communicationMessage}>
          Bro just a reminder I have a grill
        </Text>
        <View style={styles.communicationStats}>
          <Text style={styles.stat}>
            {profileData.avgTextsPerDay} AVG TEXTS / DAY
          </Text>
          <Text style={styles.stat}>
            +{profileData.textChangePercentage}% THIS MONTH
          </Text>
          <Text style={styles.stat}>
            {profileData.lastSpokeHours} HRS LAST SPOKE
          </Text>
        </View>
      </View>
      <View style={styles.contactOptions}>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Facetime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: "gray",
  },
  statusContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
  },
  statusMessage: {
    fontSize: 16,
    fontStyle: "italic",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  detailItem: {
    alignItems: "center",
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  communicationContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  communicationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  communicationMessage: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
  },
  communicationStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    fontSize: 14,
    color: "gray",
  },
  contactOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  contactButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UserProfile;
