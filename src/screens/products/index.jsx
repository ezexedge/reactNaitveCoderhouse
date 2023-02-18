import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { ProductItem } from "../../components";
import { THEME } from "../../constants/theme";
import { selectProduct, filterProducts } from "../../store/actions";

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  useEffect(() => {
    dispatch(filterProducts(category.id, category.precio));
  }, []);

  const onSelected = (item) => {
    navigation.navigate("ProductDetail", {
      extra: true,
    });
  };
  const redirect = () => {
    navigation.navigate("ProductDetail", {
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
            title={`continuar precio ${category.precio}$`}
            onPress={() => redirect()}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Products;
