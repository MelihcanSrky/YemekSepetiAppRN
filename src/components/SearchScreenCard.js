import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreenCard = ({ title, point }) => (
    <View style={styles.container}>
        <Image style={styles.image}
            source={require("../../assets/pp.png")}
        />
        <Text style={styles.title}>{title}</Text>
        <View style = {{flexDirection: "row", width: 80,marginTop: 5 , justifyContent: "space-between"}}>
            <View style = {styles.point}>
                <Text style = {styles.pointText}>9.8</Text>
            </View>
            <View>
                <Icon name="star" size={30} style = {styles.star}/>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 190,
        borderRadius: 20,
        backgroundColor: "#fff",
        margin: 2,
        alignItems: "center",
    },
    image: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
    },
    point: {
        height: 30,
        width: 30,
        backgroundColor: "#4CAF50",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    pointText: {
        fontWeight: "bold",
        color: "#fff"
    },
    star: {
        color: "#FFC800"
    }
})

export default SearchScreenCard;