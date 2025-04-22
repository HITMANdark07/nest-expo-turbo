import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Todo } from "shared";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, todo.completed && styles.completed]}
        onPress={() => onToggle(todo.id)}
      />
      <Text style={[styles.title, todo.completed && styles.completedText]}>{todo.title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(todo.id)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3498db",
    marginRight: 15,
  },
  completed: {
    backgroundColor: "#3498db",
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#7f8c8d",
  },
  deleteButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default TodoItem;
