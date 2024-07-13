import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  LayoutChangeEvent,
} from "react-native";

import GroupModal from "../app/(modals)/GroupModal";

type Member = {
  id: string;
  name: string;
  uri: any;
};

type UserGroupsProps = {
  name: string;
  members: Member[];
};

const UserGroups: React.FC<UserGroupsProps> = ({ name, members }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupPosition, setGroupPosition] = useState({ x: 0, y: 0 });

  const onLayout = (event: LayoutChangeEvent) => {
    const { x, y } = event.nativeEvent.layout;
    setGroupPosition({ x, y });
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View onLayout={onLayout}>
      <TouchableOpacity style={styles.groupContainer} onPress={toggleModal}>
        <View style={styles.imageContainer}>
          {members.slice(0, 4).map((member, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={member.uri} style={styles.imagePlaceholder} />
            </View>
          ))}
        </View>
        <Text style={styles.groupName}>{name}</Text>
      </TouchableOpacity>

      <GroupModal
        visible={isModalVisible}
        onClose={toggleModal}
        group={{ name, members }}
        position={groupPosition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    height: 200,
    width: 150,
    marginBottom: 0,
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 15,
    height: 150,
    width: 150,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 5,
    },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageWrapper: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  imagePlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  groupName: {
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
});

export default UserGroups;
