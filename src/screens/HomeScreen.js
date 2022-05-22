import { StyleSheet, Text, View, Image, SafeAreaView, Platform, ScrollView, Animated } from "react-native";
import { react, Component } from "react";
import
MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";


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

const Item = ({ title, price }) => (
    <View style={styles.lastOrder}>
        <Text style={styles.lastOrderText}>{title}</Text>
        <Text style={styles.lastOrderPrice}>{price}</Text>
    </View>
);

const Item2 = ({ point, title }) => (
    <View style={styles.fav}>
        <View style={styles.favCard}>
            <View style={styles.favPoint}>
                <Text style={styles.favPointText}>{point}</Text>
            </View>

            <Text style={styles.favTitle}>{title}</Text>
        </View>
        <LinearGradient
            colors={["#000", "transparent"]}
            style={styles.favLinGra}
        >

        </LinearGradient>
    </View>
)

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} price={item.price} />
    )
    const renderItem2 = ({ item }) => (
        <Item2 point={item.point} title={item.title} />
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
        fontWeight: "bold"
    },
    blackTexts: {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: "bold"
    },
    lastOrder: {
        backgroundColor: "#fff",
        marginTop: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    lastOrderText: {
        fontSize: 18,
        margin: 10,
    },
    lastOrderPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4CAF50",
        margin: 10,
        marginRight: 20
    },
    favPoint: {
        height: 50,
        width: 50,
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        margin: 20
    },
    favCard: {
        flexDirection: "row",
        alignItems: "center"

    },
    favPointText: {
        fontWeight: "bold",
        color: "#fff"
    },
    favTitle: {
        fontSize: 18,
        marginLeft: 5,
        fontWeight: "bold",
    },
    favForeGround: {
    },
    favLinGra: {
        height: 90,
        width: 90,
        transform: [{ rotate: "90deg" }],

    },
    fav: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginTop: 2,
        alignItems: "center"
    }
});

export default HomeScreen;