import { View, TouchableOpacity, Text, ImageBackground } from "react-native";

import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <TouchableOpacity
          style={{ ...styles.contentContainer }}
          onPress={() => onSelected(item)}
        >
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default CategoryItem;
