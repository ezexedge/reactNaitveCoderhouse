import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#efeff0",
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    marginHorizontal: 15,
  },
});
