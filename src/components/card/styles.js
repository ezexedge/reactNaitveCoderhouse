import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.card,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
