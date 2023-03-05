import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { PlaceItem } from "../../components";
import { styles } from "./styles";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );
  const keyExtractor = (item) => item.id;
  return places.length === 0 ? (
    <Text style={styles.fuente}>No agregaste ningun skatepark</Text>
  ) : (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={places.length === 0 ? <Text style={styles.fuente}>ded</Text> : renderItem}
    />
  );
};

export default PlaceList;
