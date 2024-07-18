import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const FloatingActionButton = () => {
  const isOpen = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: withSpring(isOpen.value ? "45deg" : "0deg") }],
    };
  });

  const toggleFAB = () => {
    isOpen.value = !isOpen.value;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.fabContainer}>
        {isOpen.value && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Facetime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Call</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity style={styles.fab} onPress={toggleFAB}>
          <Animated.View style={[styles.fabIcon, animatedStyle]}>
            <Text style={styles.fabIconText}>+</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    top: 110, // Adjust the distance from the top as needed
    right: 1230, // Adjust the distance from the right as needed
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  fabIcon: {
    transform: [{ rotate: "0deg" }],
  },
  fabIconText: {
    fontSize: 24,
    color: "white",
  },
  menu: {
    position: "absolute",
    bottom: 72,
    alignItems: "center",
  },
  menuItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    width: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItemText: {
    color: "#6200ee",
  },
});

export default FloatingActionButton;
