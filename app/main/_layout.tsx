import { Tabs } from "expo-router/tabs";
import { Palette } from "../../const/Palette";
import { Image, Text } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React from "react";
export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: Palette.main,
        tabBarInactiveBackgroundColor: Palette.main,
        tabBarActiveTintColor: "#FFF",
        headerLeft: ({}) => {
          return (
            <Image
              width={50}
              height={50}
              marginLeft={"$1"}
              marginVertical={"$2"}
              alt=""
              source={require("../../assets/Icons/app-icon.png")}
            />
          );
        },

        headerBackgroundContainerStyle: { backgroundColor: Palette.main },
        tabBarInactiveTintColor: "rgba(255,255,255,0.6)",
        tabBarStyle: {
          height: 60,
          display: "flex",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="convention"
        options={{
          title: "Convenção",
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="file-text" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="benefits"
        options={{
          title: "Benefícios",
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="dollar-sign" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Notícias/Ações",
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
