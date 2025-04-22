import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { Todo } from "shared";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTodos = async (): Promise<void> => {
    try {
      setLoading(true);
      // Mock data for demo purposes
      setTodos([
        {
          id: "1",
          title: "Learn React Native",
          completed: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Build a Todo App",
          completed: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch todos");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (): Promise<void> => {
    if (!newTodo.trim()) return;

    try {
      const newTodoItem: Todo = {
        id: Math.random().toString(36).substring(2, 15),
        title: newTodo,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    } catch (error) {
      Alert.alert("Error", "Failed to add todo");
      console.error(error);
    }
  };

  const handleToggleTodo = async (id: string): Promise<void> => {
    try {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
      );
    } catch (error) {
      Alert.alert("Error", "Failed to update todo");
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id: string): Promise<void> => {
    try {
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      Alert.alert("Error", "Failed to delete todo");
      console.error(error);
    }
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <TodoItem todo={item} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
  );

  return (
    <View className="flex-1 p-5">
      <View className="flex-row mb-5">
        <TextInput
          className="flex-1 h-12 border border-gray-300 rounded-md px-4 text-base bg-white"
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add a new todo..."
          placeholderTextColor="#95a5a6"
        />
        <TouchableOpacity
          className="ml-2 bg-blue-500 justify-center items-center rounded-md px-4"
          onPress={handleAddTodo}
        >
          <Text className="text-white font-bold text-base">Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        className="flex-1"
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item: Todo) => item.id}
      />
    </View>
  );
};

export default TodoList;
