import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { _create } from "../api";
import { COLORS } from "../constants/theme";
import { styles } from "../styles/AddTodo.style";

const AddTodo = ({ todoText, setTodoText, todos, setTodos }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    if (todoText) {
      try {
        const response = await _create({
          text: todoText,
          status: 0,
        });

        if (response.data.status == 201) {
          const todo = response.data.data;
          setTodos([todo, ...todos]);
          setTodoText("");
        }
      } catch (e) {
        console.log(e);
      }
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write a todo here.."
        placeholderTextColor="rgba(0,0,0,.4)"
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.addButton}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={COLORS.white} />
        ) : (
          <Text style={styles.addButtonText}>Add</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
