import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import books from "../../data/books.json";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";


const AuthorList = (props) => {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
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
                    <Text style={styles.textStyle}>{item.author}</Text>
                );
            }
            }
            keyExtractor= {(item) => item.title}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30,
        fontFamily: 'WorkSans_400Regular',
        fontSize: 16
    }
});

export default AuthorList;

