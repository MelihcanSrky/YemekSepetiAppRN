import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";


const Item2 = ({title, point, onPress}) => {

    return (
        <TouchableOpacity style={styles.fav}
            onPress={onPress}
        >
            <View style={styles.favCard}>
                <View style={styles.favPoint}>
                    <Text style={styles.favPointText}>{point}</Text>
                </View>

                <Text style={styles.favTitle}>{title}</Text>
            </View>

            <ImageBackground
                source={require("../../assets/pp.png")}
                style={styles.favResImg}
            >
                <LinearGradient
                    colors={["transparent", "#fff"]}
                    style={styles.favLinGra}
                >

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
        marginLeft: 1,
        marginRight: 1,
        alignItems: "center"
    },
    favResImg: {
        height: 90,
        width: 90,
    }
})

export default Item2;