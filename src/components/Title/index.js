import react from "react";
import {View, Text}  from "react-native";
import { styles } from "../Form/style";

export default function Title() {
    return(
        <View style={styles.container}>
            <Text style = {styles.textTitle}>HEALTH</Text>
        </View>
    );
}
