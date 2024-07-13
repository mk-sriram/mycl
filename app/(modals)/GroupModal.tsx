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
  phoneNum: string;
  contactMethod: "instagram" | "message";
  contactLink: string;
};

type Group = {
  name: string;
  members: Member[];
};

type GroupModalProps = {
  visible: boolean;
  onClose: () => void;
  group: Group | null;
  position: { x: number; y: number };
};

const GroupModal: React.FC<GroupModalProps> = ({
  visible,
  onClose,
  group,
  position,
}) => {
  if (!group) return null;

  const renderContactIcon = (method: "instagram" | "message") => {
    switch (method) {
      case "instagram":
        return (
          <Image
            source={require("../../assets/images/instagram.png")}
            style={styles.IconImage}
          />
        );
      case "message":
        return (
          <Image
            source={require("../../assets/images/messages.png")}
            style={styles.IconImage}
          />
        );
      default:
        return null;
    }
  };

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
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{item.name}</Text>
                <View style={styles.contactIcons}>
                  <TouchableOpacity
                    onPress={() => {
                      /* Handle phone call */
                    }}
                  >
                    <Image
                      source={require("../../assets/images/phone.png")}
                      style={styles.IconImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      /* Handle default contact method */
                    }}
                  >
                    {renderContactIcon(item.contactMethod)}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          numColumns={1}
          showsVerticalScrollIndicator={false}
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
    //backgroundColor: "red",
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    width: Dimensions.get("window").height * 0.3,
    //backgroundColor: "green",
  },
  memberImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 2,
  },
  memberName: {
    fontSize: 16,
    fontFamily: "mon",
    marginBottom: 5,
  },
  contactIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  IconImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default GroupModal;
