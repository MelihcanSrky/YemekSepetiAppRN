import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Item = ({ title, price }) => (
    <View style={styles.lastOrder}>
        <Text style={styles.lastOrderText}>{title}</Text>
        <Text style={styles.lastOrderPrice}>{price}</Text>
    </View>
);

const styles = StyleSheet.create({
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
})

export default Item;