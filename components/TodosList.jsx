import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import TodoItem from "./TodoItem";
import { styles } from "../styles/TodosList.style";
import { _delete, _update } from "../api";

const TodosList = ({ todos, setTodos, isLoading, error }) => {
  const [isUpdating, setIsUpdating] = useState(null);
  const [isDeleting, setIsDeleting] = useState(null);

  return isLoading ? (
    <View style={styles.noTodos}>
      <ActivityIndicator size={"large"} color={COLORS.primary} />
    </View>
  ) : error ? (
    <View style={styles.noTodos}>
      <Text>Somthing went wrong! {error.toString()}</Text>
    </View>
  ) : todos.length === 0 ? (
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
            isUpdating={isUpdating}
            isDeleting={isDeleting}
            onUpdate={async (id) => {
              setIsUpdating(id);
              try {
                const todo = todos.find((t) => t.id === id);
                const response = await _update(id, {
                  status: !todo.status,
                });

                if (response.status == 204) {
                  setTodos(
                    todos.map((todo) => {
                      if (todo.id === id) {
                        return { ...todo, status: !todo.status };
                      }
                      return todo;
                    })
                  );
                }
              } catch (e) {
                console.log(e);
              }

              setIsUpdating(null);
            }}
            onDelete={async (id) => {
              setIsDeleting(id);
              try {
                const response = await _delete(id);

                if (response.data.status == 200) {
                  setTodos(todos.filter((todo) => todo.id !== id));
                }
              } catch (e) {
                console.log(e);
              }

              setIsDeleting(null);
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
