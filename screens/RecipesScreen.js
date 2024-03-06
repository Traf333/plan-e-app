import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackgroundBase,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../actions/recipeAction";
import { getImageUrl } from "../utils";

const styles = StyleSheet.create({
  gridContainer: {
    // padding: 16,
    // gap: 12,
  },
  gridItem: {
    flex: 1,
    // margin: 8,
    position: "relative",
  },
  recipeImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "start",
    alignItems: "start",
  },
});

const RecipesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipess);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const [categories, setCategories] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const tags = [
    { id: 1, name: "quick" },
    { id: 2, name: "slow" },
  ];
  const cuisines = [
    { id: 1, name: "quick" },
    { id: 2, name: "slow" },
  ];

  const fetchCategories = async () => {
    // Fetch categories logic
  };

  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#f8f8f8",
              padding: 10,
              borderRadius: 5,
              width: "50%",
              flexDirection: "row",
              alignItems: "start",
            }}
            onPress={() => navigation.navigate("Рецепт", { recipe: item })}
            // onPress={() => addToCart(item.id)}
          >
            <View style={styles.gridItem}>
              <Image
                source={{
                  uri: getImageUrl(item.attributes.images?.data),
                }}
                style={styles.recipeImage}
              />
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.attributes.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecipesScreen;
