import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";

const Cart = ({ navigation }) => {
  const categories = useSelector((state) => state.cart.orders);
  console.log("dd", categories);
  return (
    <View style={styles.container}>
      <Text>My Cart</Text>
    </View>
  );
};

export default Cart;
