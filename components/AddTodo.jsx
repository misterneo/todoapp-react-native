import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/AddTodo.style";

const AddTodo = ({ todoText, setTodoText, todos, setTodos }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write a todo here.."
        placeholderTextColor="rgba(0,0,0,.4)"
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
        style={styles.textInput}
      />
      <TouchableOpacity
        onPress={() => {
          if (todoText) {
            setTodos([
              {
                id: Math.floor(Math.random() * 100000000),
                text: todoText,
                status: false,
              },
              ...todos,
            ]);
            setTodoText("");
          }
        }}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
