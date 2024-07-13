import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFFFF",
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "sf-regular",
  },
  btnIcon: {
    position: "absolute",
    left: 16,
  },
 
});
