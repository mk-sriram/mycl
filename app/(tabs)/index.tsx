import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import SearchHeader from "@/components/SearchHeader";
import UserGroups from "@/components/UserGroups";
import GroupModal from "../(modals)/GroupModal";
import { LinearGradient } from "expo-linear-gradient";
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

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
  {
    name: "ReLink",
    members: [
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
        id: "1",
        name: "John",
        uri: require("../../assets/images/profilePics/image1.jpg"),
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

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 100], [1, 0]),
    };
  });

  const handleOpenModal = (group: Group) => {
    setSelectedGroup(group);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedGroup(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Stack.Screen options={{ header: () => <SearchHeader /> }} />
        <Animated.View style={[styles.headerContainer, headerAnimatedStyle]}>
          <Text style={styles.title}>Groups</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-outline" size={25} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollViewContent}
        >
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
            <FlatList
              data={placeholderGroups}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.groupContainer}>
                  <UserGroups name={item.name} members={item.members} />
                </View>
              )}
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </Animated.ScrollView>
        {selectedGroup && (
          <GroupModal
            visible={modalVisible}
            onClose={handleCloseModal}
            group={selectedGroup}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  headerContainer: {
    backgroundColor: "rgba(246, 246, 246, 1)",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  scrollViewContent: {
    paddingHorizontal: 10,
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
  title: {
    fontSize: 24,
    fontFamily: "mon-sb",
    color: "#000",
  },
});
