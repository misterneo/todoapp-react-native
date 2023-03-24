import { Stack } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AddTodo from "../components/AddTodo";
import TodosList from "../components/TodosList";
import { COLORS, FONT, SIZES } from "../constants/theme";
import useFetch from "../hook/useFetch";

const App = () => {
  const { data, setData, isLoading, error } = useFetch();
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
      <TodosList
        todos={data}
        setTodos={setData}
        isLoading={isLoading}
        error={error}
      />
      <AddTodo
        todoText={todoText}
        setTodoText={setTodoText}
        todos={data}
        setTodos={setData}
      />
    </SafeAreaView>
  );
};

export default App;
