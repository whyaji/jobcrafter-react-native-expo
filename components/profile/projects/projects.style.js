import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  projectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  projectImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  projectDetails: {
    flex: 1,
  },
  projectTitle: {
    fontSize: SIZES.medium + 1,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  projectDescription: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 10,
  },
  linkRepo: {
    color: 'blue',
  },
});

export default styles;
