import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.large,
    marginBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.xSmall,
    marginBottom: SIZES.medium,
  },
  textInput: {
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    width: "70%",
  },
  addButton: {
    width: "20%",
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.medium,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
});
