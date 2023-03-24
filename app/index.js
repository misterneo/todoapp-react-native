import { Stack } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AddTodo from "../components/AddTodo";
import TodosList from "../components/TodosList";
import { COLORS, FONT, SIZES } from "../constants/theme";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerTitleStyle: {
            fontFamily: FONT.bold,
            fontSize: SIZES.xLarge,
          },
          headerShadowVisible: true,
          headerTitle: "Todo App",
          headerTitleAlign: "center",
        }}
      />
      <TodosList todos={todos} setTodos={setTodos} />
      <AddTodo
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
      />
    </SafeAreaView>
  );
};

export default App;
