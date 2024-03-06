import React from 'react';
import { View, Text, FlatList } from 'react-native';

const CartScreen = () => {
  const cartItems = []; // Replace with actual cart data

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <Text>{item.recipeName}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CartScreen;
