import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

export const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.medium,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
  },
  checkbox: {
    alignSelf: "center",
    marginLeft: SIZES.xSmall / 2,
    marginRight: SIZES.xSmall / 4,
  },
  text: (status) => ({
    margin: SIZES.xSmall,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    maxWidth: "80%",
    textDecorationLine: status ? "line-through" : "none",
  }),
  checkTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteBtnContainer: {
    justifyContent: "center",
    marginRight: SIZES.xSmall / 2,
  },
});
