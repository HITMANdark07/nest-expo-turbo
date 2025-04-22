import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Add a new todo..."
          placeholderTextColor="#95a5a6"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "white",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
});

export default TodoList;
