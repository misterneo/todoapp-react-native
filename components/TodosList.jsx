import React from "react";
import { FlatList, Text, View } from "react-native";
import { SIZES } from "../constants/theme";
import TodoItem from "./TodoItem";
import { styles } from "../styles/TodosList.style";

const TodosList = ({ todos, setTodos }) => {
  return todos.length === 0 ? (
    <View style={styles.noTodos}>
      <Text>You still haven't added any todos!</Text>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <View style={styles.todosTitleContainer}>
        <Text style={styles.todosTitle}>My Todos:</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onUpdate={(id) => {
              setTodos(
                todos.map((todo) => {
                  if (todo.id === id) {
                    return { ...todo, status: !todo.status };
                  }
                  return todo;
                })
              );
            }}
            onDelete={(id) => {
              setTodos(todos.filter((todo) => todo.id !== id));
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: SIZES.medium,
        }}
      />
    </View>
  );
};

export default TodosList;
