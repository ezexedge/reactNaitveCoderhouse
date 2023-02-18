import React from "react";
import { View, Text, Alert, Button, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { selectProduct, filterProducts } from "../../store/actions";
import { addCart } from "../../store/actions/cart.action";

const ProductDetail = ({ navigation, route }) => {
  const { extra } = route.params;
  const dispatch = useDispatch();

  const precio = useSelector((state) => state.products.finalPrice);
  const product = useSelector((state) => state.products.filteredProducts);
  const category = useSelector((state) => state.category.selected);

  const onAddCart = () => {
    console.log("sss", category);
    dispatch(addCart(category));
    Alert.alert("AGREGADO");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      {extra === true ? (
        <>
          <Text style={{ color: "blue", fontSize: 20 }}>+</Text>

          <Text style={styles.title}>{product[0].title}</Text>
        </>
      ) : null}

      <TouchableOpacity>
        <Button
          title={`Agregar al carrito precio ${
            extra === true ? precio : category.precio
          }$`}
          onPress={onAddCart}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
