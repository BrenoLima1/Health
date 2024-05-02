import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: -30,
      justifyContent: 'center',
      height: '20%',
      backgroundColor: '#e0e5e5',
      alignItems: 'center',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30
    },

    textTitle: {
        color: '#ff0043',
        fontSize: 24,
        fontWeight: '900',
    },

    formContext : {
      width: '100%',
      height: '100%',
      bottom: 0,
      backgroundColor: '#ffff',
      alignItems: 'center',
      marginTop: 30,
    },

    form: {
      width: '100%',
      height: 'auto',
      marginTop: 30,
      padding: 10,
    },

    formLabel: {
      color: '#000',
      fontSize: 18,
      paddingLeft: 20
    },

    input: {
      backgroundColor: '#e9ecec',
      fontWeight: "500",
      marginBottom: 10
    },

    ButtonCalculator: {
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: '#f36060',
    },

    TextButtonCalculator: {
      fontSize: 20,
      color: '#ffffff',
    },

    resultIMC: {
      marginTop: -15,
      paddingTop: '10%',
      borderRadius: 50,
      alignItems :'center',
      fontSize: 30,
      textAlign:'center',
      color: '#ff0000'
    },

    errorMessage: {
      fontSize: 10,
      color: '#ff0000'
    },

    shareButton: {
      flexDirection: 'row',
      borderRadius: 20,
      width: 200,
      height: '15%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#c7eb84',
    },

    textShare: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20
    },

    exhibitionResultIMC: {
      width: '100%',
      height: '50%'
    },

    listIMCs: {
      marginTop: 5,
    },

    resultIMCItem: {
      fontSize: 24,
      color: 'red',
      height: 50,
      width: '100%',
      paddingRight: 20
    },

    textResultIMCItem: {
      fontSize: 14,
    }
  });
