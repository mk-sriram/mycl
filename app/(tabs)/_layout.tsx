import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryBlue,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust the color as needed
          borderRadius: 35,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 6,
          elevation: 5,
          borderTopWidth: 0,
          paddingTop: 0,
          paddingBottom: 10,
          marginBottom: 10,

          justifyContent: "center", // Center the icons vertically
        },
        tabBarIconStyle: {
          marginBottom: -20, // Ensure the icons are not pushed up
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle-outline" color={color} size={33} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={33} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
