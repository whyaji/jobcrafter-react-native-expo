import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    alignItems: 'center',
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 10,
  },
  profilePicture: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  totalProject: {
    fontSize: SIZES.large - 5,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
});

export default styles;
