import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import RecipesScreen from "./screens/RecipesScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";
import OrdersScreen from "./screens/OrdersScreen";
import CartScreen from "./screens/CartScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

const Tab = createBottomTabNavigator();
const RecipeStack = createStackNavigator();

const RecipeStackScreen = () => (
  <RecipeStack.Navigator>
    <RecipeStack.Screen name="Список рецептов" component={RecipesScreen} />
    <RecipeStack.Screen
      name="Рецепт"
      options={{ title: "", headerBackTitle: "Назад" }}
      component={RecipeDetailsScreen}
    />
  </RecipeStack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: route.name !== "Рецепты",
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Рецепты") {
                  iconName = focused ? "restaurant-menu" : "restaurant";
                } else if (route.name === "История") {
                  iconName = focused ? "view-list" : "reorder";
                } else if (route.name === "Корзина") {
                  iconName = focused ? "shopping-cart" : "add-shopping-cart";
                }

                // Return the appropriate icon for each tab
                return (
                  <MaterialIcons name={iconName} size={size} color={color} />
                );
              },
            })}
          >
            <Tab.Screen name="Рецепты" component={RecipeStackScreen} />
            <Tab.Screen name="История" component={OrdersScreen} />
            <Tab.Screen name="Корзина" component={CartScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
