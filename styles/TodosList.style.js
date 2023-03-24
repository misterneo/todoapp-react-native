import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../constants/theme";

export const styles = StyleSheet.create({
  noTodos: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  todosTitleContainer: {
    marginLeft: SIZES.large,
    marginVertical: SIZES.small,
    marginTop: SIZES.large,
  },
  todosTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large / 1.2,
  },
});
