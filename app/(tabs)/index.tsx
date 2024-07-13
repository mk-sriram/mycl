import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import SearchHeader from "@/components/SearchHeader";
import UserGroups from "@/components/UserGroups";
import GroupModal from "../(modals)/GroupModal";


type Member = {
  id: string;
  name: string;
  uri: any;
};

type Group = {
  name: string;
  members: Member[];
};

const placeholderGroups: Group[] = [
  {
    name: "Parsyll",
    members: [
      {
        id: "1",
        name: "John",
        uri: require("../../assets/images/profilePics/image1.jpg"),
      },
      {
        id: "2",
        name: "Jane",
        uri: require("../../assets/images/profilePics/image2.jpg"),
      },
      {
        id: "3",
        name: "Alex",
        uri: require("../../assets/images/profilePics/image3.jpg"),
      },
      {
        id: "4",
        name: "Sam",
        uri: require("../../assets/images/profilePics/image4.jpg"),
      },
      {
        id: "5",
        name: "Chris",
        uri: require("../../assets/images/profilePics/image5.jpg"),
      },
    ],
  },
  // Add more placeholder groups as needed
];

const Page: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const handleOpenModal = (group: Group) => {
    setSelectedGroup(group);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedGroup(null);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: () => <SearchHeader /> }} />
      {placeholderGroups.length === 0 ? (
        <View style={styles.placeHolderImage}>
          <Ionicons
            name="alert-circle-outline"
            size={70}
            style={{ opacity: 0.3 }}
          />
          <Text style={styles.AddGroups}>Add Groups!</Text>
          <TouchableOpacity style={styles.addGroupBtn}>
            <Ionicons name="add-outline" size={25} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Groups</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-outline" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={placeholderGroups}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.groupContainer}>
                <UserGroups
                  name={item.name}
                  members={item.members}
                  onPress={() => handleOpenModal(item)}
                />
              </View>
            )}
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
      {selectedGroup && (
        <GroupModal
          visible={modalVisible}
          onClose={handleCloseModal}
          group={selectedGroup}
        />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    marginTop: 135,
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  addBtn: {
    padding: 6,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 10,
  },
  addGroupBtn: {
    padding: 6,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 10,
  },
  AddGroups: {
    opacity: 0.3,
    fontSize: 24,
    fontFamily: "mon-sb",
    color: "#000",
  },
  content: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  groupContainer: {
    flex: 1,
    margin: 10,
  },
  placeHolderImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  headerContainer: {
    marginBottom: 0,
    paddingBottom: 0,
    position: "relative",
    backgroundColor: "transparent",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  gradientBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "mon",
    color: "#000",
  },
});
