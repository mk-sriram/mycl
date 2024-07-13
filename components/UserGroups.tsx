import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type UserGroupsProps = {
  name: string;
  link: string;
};

const UserGroups: React.FC<UserGroupsProps> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.groupContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>img</Text>
        </View>
      </View>
      <Text style={styles.groupName}>{name}</Text>
    </TouchableOpacity>
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
    padding: 10,
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
  },
  imagePlaceholder: {
    width: 140,
    height: 140,
    backgroundColor: "#e0e0e0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imageText: {
    color: "#000",
    fontSize: 16,
  },
  groupName: {
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
});

export default UserGroups;
