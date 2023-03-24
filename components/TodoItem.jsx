import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import { COLORS } from "../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/TodoItem.style";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onUpdate(todo.id)} activeOpacity={0.6}>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkTextContainer}>
          <Checkbox
            value={todo.status}
            color={todo.status ? COLORS.tertiary : undefined}
            onValueChange={() => onUpdate(todo.id)}
            style={styles.checkbox}
          />
          <Text style={styles.text(todo.status)}>{todo.text}</Text>
        </View>
        <View style={styles.deleteBtnContainer}>
          <TouchableOpacity onPress={() => onDelete(todo.id)}>
            <MaterialCommunityIcons name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
