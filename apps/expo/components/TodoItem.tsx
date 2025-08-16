import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Todo } from 'shared';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <View className='flex-row items-center p-4 bg-white rounded-md mb-2 shadow-sm'>
      <TouchableOpacity
        className={`w-6 h-6 rounded-full border-2 border-blue-500 mr-4 ${
          todo.completed ? 'bg-blue-500' : ''
        }`}
        onPress={() => onToggle(todo.id)}
      />
      <Text
        className={`flex-1 text-base ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
        }`}
      >
        {todo.title}
      </Text>
      <TouchableOpacity
        className='w-6 h-6 rounded-full bg-red-500 justify-center items-center'
        onPress={() => onDelete(todo.id)}
      >
        <Text className='text-white font-bold text-xs'>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
