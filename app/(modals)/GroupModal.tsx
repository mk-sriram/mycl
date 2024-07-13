import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Member = {
  id: string;
  name: string;
  uri: any;
};

type Group = {
  name: string;
  members: Member[];
};

type GroupModalProps = {
  visible: boolean;
  onClose: () => void;
  group: Group | null;
};

const GroupModal: React.FC<GroupModalProps> = ({ visible, onClose, group }) => {
  if (!group) return null;

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{group.name}</Text>
          <FlatList
            data={group.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.memberContainer}>
                <Image source={item.uri} style={styles.memberImage} />
                <Text style={styles.memberName}>{item.name}</Text>
              </View>
            )}
            numColumns={2}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "mon-sb",
    marginBottom: 20,
  },
  memberContainer: {
    alignItems: "center",
    margin: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  memberName: {
    fontSize: 14,
    fontFamily: "mon",
  },
});

export default GroupModal;
