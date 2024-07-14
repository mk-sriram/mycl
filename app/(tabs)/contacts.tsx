import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchHeader from "@/components/SearchHeader";
import { router, Stack } from "expo-router";
import SearchContacts from "@/components/SearchContacts";
import FloatingActionButton from "@/components/FloatingAction";

type Member = {
  id: string;
  name: string;
  uri: any;
  phoneNum: string;
  contactMethod: string;
  contactLink: string;
};

const ContactsPage: React.FC = () => {
  const placeholderContacts: Member[] = [
    {
      id: "1",
      name: "Andrey Asperch",
      uri: require("../../assets/images/profilePics/image1.jpg"),
      phoneNum: "123-456-7890",
      contactMethod: "message",
      contactLink: "sms:+1234567890",
    },
    {
      id: "2",
      name: "Anna Avalaavoma",
      uri: require("../../assets/images/profilePics/image2.jpg"),
      phoneNum: "234-567-8901",
      contactMethod: "instagram",
      contactLink: "https://instagram.com/anna",
    },
    {
      id: "3",
      name: "Antony Brilka",
      uri: require("../../assets/images/profilePics/image3.jpg"),
      phoneNum: "345-678-9012",
      contactMethod: "message",
      contactLink: "sms:+3456789012",
    },
    {
      id: "4",
      name: "Skott Brown",
      uri: require("../../assets/images/profilePics/image4.jpg"),
      phoneNum: "456-789-0123",
      contactMethod: "message",
      contactLink: "sms:+4567890123",
    },
    {
      id: "5",
      name: "John Bohemian",
      uri: require("../../assets/images/profilePics/image5.jpg"),
      phoneNum: "567-890-1234",
      contactMethod: "email",
      contactLink: "mailto:john@example.com",
    },
    {
      id: "6",
      name: "Victor Borisov",
      uri: require("../../assets/images/profilePics/image6.jpg"),
      phoneNum: "678-901-2345",
      contactMethod: "email",
      contactLink: "mailto:victor@example.com",
    },
    {
      id: "7",
      name: "Vena Celencia",
      uri: require("../../assets/images/profilePics/image7.jpg"),
      phoneNum: "789-012-3456",
      contactMethod: "message",
      contactLink: "sms:+7890123456",
    },
    {
      id: "8",
      name: "Charles Cat",
      uri: require("../../assets/images/profilePics/image8.jpg"),
      phoneNum: "890-123-4567",
      contactMethod: "message",
      contactLink: "sms:+8901234567",
    },
  ];


  const renderContactIcon = (method: string) => {
    switch (method) {
      case "instagram":
        return (
          <Image
            source={require("../../assets/images/instagram.png")}
            style={styles.contactIcon}
          />
        );
      case "message":
        return (
          <Image
            source={require("../../assets/images/messages.png")}
            style={styles.contactIcon}
          />
        );
      case "email":
        return (
          <Image
            source={require("../../assets/images/email.png")}
            style={styles.contactIcon}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: () => <SearchContacts /> }} />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/profilePics/image9.jpg")}
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.profileName}>Sriram MK</Text>
              <Text style={styles.profileStats}>
                386 contacts{" "}
                <Text style={styles.activeContacts}>73 active</Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.navigate("profile");
              }}
            >
              <Ionicons name="chevron-forward" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={placeholderContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <Image source={item.uri} style={styles.contactImage} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{item.name}</Text>
              <View style={styles.contactMethods}>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    source={require("../../assets/images/phone.png")}
                    style={styles.contactIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle contact method click */
                  }}
                >
                  {renderContactIcon(item.contactMethod)}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <FloatingActionButton style={styles.floatAB}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.94,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 20,
  },
  profileName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  profileStats: {
    fontSize: 14,
    color: "#666",
  },
  activeContacts: {
    color: "green",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contactMethods: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginLeft: 75, // Adjust as needed for proper indentation
  },
  floatAB:{
    position: "absolute",
    
  }
});

export default ContactsPage;
