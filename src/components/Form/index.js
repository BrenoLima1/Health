import react, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
  FlatList,
} from "react-native";
import ResultIMC from "./ResultIMC";
import { styles } from "./style";

function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [IMCList, setIMCList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    const totalIMC = (weight / (heightFormat * heightFormat)).toFixed(2);
    setIMCList((arr) => [...arr, {id: new Date().getTime(true), imc: totalIMC}] );
    setImc(totalIMC);
    return totalIMC;
  }

  function validationIMC(height, weight) {
      setTextButton("Calcular");
    if(imc == null){
        if (!height || !weight) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
            setMessageIMC("Preencha o peso e a altura");
            setErrorMessage("Campo obrigatório*");
        } else {
            Keyboard.dismiss();
            setErrorMessage(null);
            let resultIMC = imcCalculator();

            if (resultIMC < 18.5) {
                setMessageIMC(`Abaixo do Peso Normal.`);
            } else if (resultIMC >= 18.5 && resultIMC <= 24.9) {
                setMessageIMC(`Peso Normal.`);
            } else if (resultIMC > 24.9 && resultIMC <= 29.9) {
                setMessageIMC(`Sobrepeso.`);
            } else if (resultIMC > 29.9 && resultIMC <= 34.9) {
                setMessageIMC(`Obesidade Grau 1.`);
            } else {
                setMessageIMC(`Obesidade Grau 2.`);
            }
            setTextButton("Recalcular");
        }
    }else{
        setImc(null)
    }
    }

    return (
        <View style={styles.formContext}>
      {imc == null ? (
          <Pressable style={styles.form} onPress={Keyboard.dismiss}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            value={height}
            onChangeText={(e) => setHeight(e)}
          ></TextInput>
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex. 75.33"
            keyboardType="numeric"
            value={weight}
            onChangeText={(e) => setWeight(e)}
          ></TextInput>
          <TouchableOpacity
            title={textButton}
            style={styles.ButtonCalculator}
            onPress={() => validationIMC(height, weight)}
          >
            <Text style={styles.TextButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultIMC}>
          <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
          <TouchableOpacity
            title={textButton}
            style={styles.ButtonCalculator}
            onPress={() => validationIMC(height, weight)}
          >
            <Text style={styles.TextButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
      style={styles.listIMCs}
      data={IMCList.reverse()} //Para que os IMC's mais recentes fiquem em cima da lista
      renderItem={
        ({ item }) => {
          return (
            <Text style={styles.resultIMCItem}>
                <Text style={styles.textResultIMCItem}>Resultado IMC = </Text>
                {item.imc}
            </Text>
          )
          }
      }
      keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

export default Form;
