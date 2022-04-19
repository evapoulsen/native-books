import { View, FlatList, Text } from 'react-native';
import React from 'react';
import books from "../../data/books.json";

const BookList = () => {
  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
            return (
                <Text>{item.title}</Text>
            );
        }}
        keyExtractor= {(item) => item.title}
      />
    </View>
  );
}

export default BookList;

