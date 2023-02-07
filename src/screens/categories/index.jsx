import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import { PIZZAS } from "../../constants/data/index";
import { THEME } from "../../constants/theme";

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      title: item.title,
      precio: item.precio,
    });
  };
  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PIZZAS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
