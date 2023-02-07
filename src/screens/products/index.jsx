import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";
import { ProductItem } from "../../components";
import { EXTRA } from "../../constants/data/index";
import { THEME } from "../../constants/theme";

const Products = ({ navigation, route }) => {
  const { categoryId, title, precio } = route.params;

  console.warn(title, categoryId);

  const filteredProducts = EXTRA.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("ProductDetail", {
      productId: item.id,
      title: item.title,
      pizza: title,
      precio,
      extra: true,
    });
  };
  const redirect = () => {
    navigation.navigate("ProductDetail", {
      title,
      pizza: title,
      precio,
      extra: false,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
      <View style={styles.continue}>
        <TouchableOpacity>
          <Button
            title={`continuar precio ${precio}$`}
            onPress={() => redirect()}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Products;
