import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import SearchScreenCard from "../components/SearchScreenCard";

const Foods = [
    {
        id: "1",
        title: "BurgerKing",
        point: "9.8"
    },
    {
        id: "2",
        title: "KFC",
        point: "9.7"
    },
    {
        id: "3",
        title: "Popeyes",
        point: "7.8"
    }
]

const Desserts = [
    {
        id: "1",
        title: "Mado",
        point: "8.6"
    }
]

const SearchScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = query => setSearchQuery(query);

    const renderItem = ({ item }) => (
        <SearchScreenCard title={item.title} point={item.point} />
    )

    return (
        <ScrollView style={styles.container}>
            <View >
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <Text style={styles.redTexts}>Foods</Text>
                <View>
                    <FlatList
                        data={Foods}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                <Text style={styles.redTexts}>Desserts</Text>
                <FlatList
                    data={Desserts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    searchBar: {
        margin: 40,
        marginTop: 20,
        marginBottom: 20,
        height: 50,
        borderRadius: 25,
        elevation: 1
    },
    container: {
        backgroundColor: "#E8E3E3",
        flex: 1
    },
    redTexts: {
        marginLeft: 20,
        color: "#D31919",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
});

export default SearchScreen;