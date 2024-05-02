import react from "react";
import {View, Text, Share, TouchableOpacity, Alert}  from "react-native";
import { styles } from "../style";

export default function ResultIMC(props) {

    const onShare =  async () =>{
        await Share.share({message: `Meu IMC é ${props.resultIMC}.\n Classificação: ${props.messageResultIMC}
        \nAcesse o app para ver mais informações.
        \nAplicativo desenvolvido por Breno Lima.
        `})
      .then(()=> Alert.alert("Compartilhamento realizado com sucesso!"))
      .catch((err)=>alert('Ocorreu um erro ao compartilhar!'));
    };

    return(
        <View style={{alignItems:"center"}}>
                <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                <Text style={styles.textShare}>Compartilhar</Text>
            </TouchableOpacity>
            <View/>
            <Text style={styles.resultIMC}>{props.resultIMC}</Text>
            <Text style={styles.resultIMC}>{props.messageResultIMC}</Text>
        </View>
    );
}
