import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.large,
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
  contextTextColor: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 10,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 60,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  formInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  formBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  formBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  loginPicture: {
    borderRadius: 50,
    width: 200,
    height: 200,
  },
});

export default styles;
