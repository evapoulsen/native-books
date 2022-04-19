import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import books from "../../data/books.json";
import { useFonts, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

const BookList = (props) => {
    let [fontsLoaded] = useFonts({
        Montserrat_300Light,
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }
    const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate("Book Details")
                }}
              >
              <Text style={styles.textStyle}>{item.title}</Text>
              </TouchableOpacity>
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

