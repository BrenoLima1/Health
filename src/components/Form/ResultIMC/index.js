import react from "react";
import {View, Text}  from "react-native";
import { styles } from "../style";

export default function ResultIMC(props) {
    return(
        <View>
            {/* <Text style={styles.resultIMC}>{props.resultIMC}</Text> */}
            <Text style={styles.resultIMC}>{props.messageResultIMC}</Text>
        </View>
    );
}
