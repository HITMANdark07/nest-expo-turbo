import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-blue-500 py-4 px-5 mb-2">
        <Text className="text-white font-bold text-xl text-center">Todo App</Text>
      </View>
      <TodoList />
      <StatusBar style="auto" />
    </View>
  );
}
