import react, {useState} from "react";
import {TextInput, Text, View, Button, TouchableOpacity}  from "react-native";
import ResultIMC from "./ResultIMC";
import { styles } from "./style";

function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC ] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator() {
        const calculatedImc = weight / (height * height);
        const formattedImc = calculatedImc.toFixed(2);
        setImc(formattedImc);
        return formattedImc;
    }


    function validationIMC(height, weight) {
        if (!height || !weight) {
            setMessageIMC("Preencha o peso e a altura");
            setTextButton('Calcular')
        } else {
            let resultIMC = imcCalculator();

            if (resultIMC < 18.5) {
                setMessageIMC(`Seu IMC é ${resultIMC}, você está abaixo do Peso Normal.`);
            } else if (resultIMC >= 18.5 && resultIMC <= 24.9) {
                setMessageIMC(`Seu IMC é ${resultIMC}, você está no Peso Normal.`);
            } else if (resultIMC > 24.9 && resultIMC <= 29.9) {
                setMessageIMC(`Seu IMC é ${resultIMC}, você está com Sobrepeso.`);
            } else if (resultIMC > 29.9 && resultIMC <= 34.9) {
                setMessageIMC(`Seu IMC é ${resultIMC}, você está em Obesidade Grau 1.`);
            } else {
                setMessageIMC(`Seu IMC é ${resultIMC}, você está em Obesidade Grau 2.`);
            }
            setTextButton('Recalcular')
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                placeholder = 'Ex. 1.75'
                keyboardType = 'numeric'
                value={height}
                onChangeText={e => setHeight(e)}
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                placeholder = 'Ex. 75.33'
                keyboardType = 'numeric'
                value={weight}
                onChangeText={e => setWeight(e)}
                ></TextInput>
                <TouchableOpacity
                title = {textButton}
                style={styles.ButtonCalculator}
                onPress= {()=> validationIMC(height, weight)}
                >
                    <Text style={styles.TextButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC = {messageIMC} resultIMC = {imc}/>
        </View>
    );
}

export default Form;
