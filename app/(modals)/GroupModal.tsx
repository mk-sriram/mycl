import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

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
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.96}
      customBackdrop={
        <BlurView intensity={90} style={StyleSheet.absoluteFill} />
      }
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={30} color="#000" />
        </TouchableOpacity>

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
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").height * 0.4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 5,
    },
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
