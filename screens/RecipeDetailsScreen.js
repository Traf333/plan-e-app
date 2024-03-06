// RecipeDetailsScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { getImageUrl } from "../utils";

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { recipe } = route.params;
  const [selectedPortion, setSelectedPortion] = useState(1);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const addToCart = () => {
    // Implement your logic to add the recipe to the cart storage
    console.log(`Added ${selectedPortion} portions of ${recipe.title} to cart`);
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Parallax Image */}
        <Animated.View
          style={[
            styles.parallaxImage,
            { transform: [{ translateY: scrollY }] },
          ]}
        >
          <Image
            source={{ uri: getImageUrl(recipe.attributes.images.data) }}
            style={styles.recipeImage}
          />
        </Animated.View>

        {/* Recipe Details */}
        <View style={styles.recipeDetails}>
          <Text style={styles.recipeTitle}>{recipe.attributes.title}</Text>
          <Text style={styles.recipeDescription}>
            {recipe.attributes.Ingredients.map((i) => i.name).join("/")}
          </Text>
          <Text style={styles.recipeDescription}>
            {JSON.stringify(recipe.attributes.instruction)}
          </Text>

          {/* Portion Selection */}
          <View style={styles.portionSelection}>
            <Text>Select Portion Size:</Text>
            {[1, 2, 4].map((portion) => (
              <TouchableOpacity
                key={portion}
                style={[
                  styles.portionButton,
                  selectedPortion === portion && styles.selectedPortionButton,
                ]}
                onPress={() => setSelectedPortion(portion)}
              >
                <Text>{portion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Animated.ScrollView>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parallaxImage: {
    height: 300,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: "100%",
  },
  recipeDetails: {
    padding: 16,
    backgroundColor: "white",
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  recipeIngredients: {
    fontSize: 16,
    marginBottom: 16,
  },
  portionSelection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  portionButton: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
  },
  selectedPortionButton: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
    color: "#fff",
  },
  addToCartButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#28a745",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default RecipeDetailsScreen;
