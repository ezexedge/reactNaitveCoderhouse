import { Text, View } from "react-native";
import { styles } from "./style";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;
