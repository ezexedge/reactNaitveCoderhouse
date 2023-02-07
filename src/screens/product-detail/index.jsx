import React from "react";
import { View, Text, Alert, Button, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants/data";

const ProductDetail = ({ navigation, route }) => {
  const { productId, title, pizza, precio, extra } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pizza}</Text>
      {extra === true ? (
        <>
          <Text style={{ color: "blue", fontSize: 20 }}>+</Text>

          <Text style={styles.title}>{title}</Text>
        </>
      ) : null}

      <TouchableOpacity>
        <Button
          title={`continuar precio ${precio}$`}
          onPress={() => Alert.alert("comprado")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
