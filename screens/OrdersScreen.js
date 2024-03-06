import React from 'react';
import { View, Text, FlatList } from 'react-native';

const OrdersScreen = () => {
  const orders = []; // Replace with actual orders data

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <Text>{item.orderDetails}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default OrdersScreen;
