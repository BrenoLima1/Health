import react, {useState} from "react";
import { TextInput,
        Text,
        View,
        TouchableOpacity,
        Vibration,
        Keyboard,
        Pressable
        } from "react-native";
import ResultIMC from "./ResultIMC";
import { styles } from "./style";

function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC ] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        let heightFormat = height.replace(',', '.');
        const calculatedImc = weight / (heightFormat * heightFormat);
        const formattedImc = calculatedImc.toFixed(2);

        setImc(formattedImc);

        return formattedImc;
    }

    function validationIMC(height, weight) {
        if (!height || !weight) {
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório*');
            setMessageIMC("Preencha o peso e a altura");
            setTextButton('Calcular')
            setErrorMessage('Campo obrigatório*');
            setImc(null);
            return;
        } else {
            Keyboard.dismiss();
            setErrorMessage(null);
            let resultIMC = imcCalculator();

            if (resultIMC < 18.5) {
                setMessageIMC(`Você está abaixo do Peso Normal.`);
            } else if (resultIMC >= 18.5 && resultIMC <= 24.9) {
                setMessageIMC(`Você está no Peso Normal.`);
            } else if (resultIMC > 24.9 && resultIMC <= 29.9) {
                setMessageIMC(`Você está com Sobrepeso.`);
            } else if (resultIMC > 29.9 && resultIMC <= 34.9) {
                setMessageIMC(`Você está em Obesidade Grau 1.`);
            } else {
                setMessageIMC(`Você está em Obesidade Grau 2.`);
            }
            setTextButton('Recalcular');
            return;
        }
    }

    return(
            <Pressable style={styles.formContext} onPress={Keyboard.dismiss}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                placeholder = 'Ex. 1.75'
                keyboardType = 'numeric'
                value={height}
                onChangeText={e => setHeight(e)}
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
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
        </Pressable>
    );
}

export default Form;
