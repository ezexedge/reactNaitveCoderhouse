import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { THEME } from "../constants/theme";
import Account from "../screens/account";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: "Bitter-Bold",
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}
    >
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
