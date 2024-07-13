import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type Member = {
  id: string;
  name: string;
  uri: any;
};

type UserGroupsProps = {
  name: string;
  members: Member[];
  onPress: () => void;
};

const UserGroups: React.FC<UserGroupsProps> = ({ name, members, onPress }) => {
  return (
    <TouchableOpacity style={styles.groupContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        {members.slice(0, 4).map((member, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={member.uri} style={styles.imagePlaceholder} />
          </View>
        ))}
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

    flexDirection: "row",
    flexWrap: "wrap",
    
  },
  imageWrapper: {
    width: "50%",
    height: "50%", 
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    //backgroundColor: "red",
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
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
