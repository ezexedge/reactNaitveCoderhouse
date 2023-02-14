import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Bitter-Regular",
          fontSize: 12,
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color="black"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={22}
              color="black"
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={22}
              color="black"
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
