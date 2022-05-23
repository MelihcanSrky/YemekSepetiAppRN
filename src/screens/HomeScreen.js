import { StyleSheet, Text, View, Image, SafeAreaView, Platform, ScrollView, Animated } from "react-native";
import { react, Component } from "react";
import
MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from "react-native-gesture-handler";
import Item from "../components/lastOrder";
import Item2 from "../components/favRes";

const DATA = [
    {
        id: "1",
        title: "Yemek 1",
        price: "18.99"
    },
    {
        id: "2",
        title: "Yemek 2",
        price: "18.99"
    },
    {
        id: "3",
        title: "Yemek 3",
        price: "18.99"
    }
];

const DATA2 = [
    {
        id: "1",
        point: 9.8,
        title: "BurgerKing",
    },
    {
        id: "2",
        point: 7.8,
        title: "Popeyes",
    }
]



const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} price={item.price} />
    )
    const renderItem2 = ({ item }) => (
        <Item2 point={item.point} title={item.title} onPress= {() => navigation.navigate("Restourant")} />
    )

    return (
        <View style={styles.backColor}>
            <View style={styles.topSize}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={styles.profile}
                        source={require("../../assets/pp.png")}
                    />
                    <Text style={styles.nameText}>MelihCan Sarıkaya</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons
                        name="home"
                        size={40}
                        color="grey"
                        style={styles.icon}
                    />
                    <View>
                        <Text style={styles.redTexts}>Address</Text>
                        <Text style={styles.blackTexts}>İzmir/Menemen</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.redTexts}>Önceki Siparişlerim</Text>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                >

                </FlatList>
            </View>
            <Text style={styles.redTexts}>Favori Restoranlarım</Text>
            <FlatList
                data={DATA2}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
            >

            </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    backColor: {
        backgroundColor: "#E8E3E3",
        flex: 1,
    },
    topSize: {
        backgroundColor: "#fff",
        width: "100%",
        height: 125
    },
    profile: {
        width: 40,
        aspectRatio: 1,
        margin: 10
    },
    nameText: {
        fontSize: 24,
        marginTop: 10,
        marginLeft: 18
    },
    icon: {
        margin: 10,
    },
    redTexts: {
        marginLeft: 20,
        color: "#D31919",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    blackTexts: {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: "bold"
    },
});

export default HomeScreen;