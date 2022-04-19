import { View, FlatList, Text } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import books from "../../data/books.json";
import { useFonts, Montserrat_300Light } from '@expo-google-fonts/montserrat';

const BookList = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_300Light,
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
            return (
                <Text style={styles.textStyle}>{item.title}</Text>
            );
        }}
        keyExtractor= {(item) => item.title}
      />
    </View>
  );
}

const styles = {
    textStyle: {
        marginVertical: 30,
        fontFamily: 'Montserrat_300Light',
        fontSize: 16
    }
}
export default BookList;

