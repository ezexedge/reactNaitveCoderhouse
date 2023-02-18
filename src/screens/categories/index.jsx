import React, { useEffect } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import { PIZZAS } from "../../constants/data/index";
import { THEME } from "../../constants/theme";
import { selectCategory, selectProduct } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    console.log("sssss", categories);
  }, []);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    console.log("ffffff//////////f", item);
    dispatch(selectProduct(item.id, item.precio));
    navigation.navigate("Products", {});
  };
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
