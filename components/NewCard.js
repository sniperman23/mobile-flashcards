import React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class NewCard extends React.Component {
    state = {
        inputsEmpty: true,
    }

    render() {
        const { inputsEmpty } = this.state

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >   
                <TextInput
                    style={styles.input}
                    placeholder="Question"
                    placeholderTextColor="gray"
                    defaultValue={""}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Answer"
                    placeholderTextColor="gray"
                    defaultValue={""}
                />
                <TouchableOpacity
                    style={inputsEmpty ? styles.buttonDisabled : styles.button}
                    disabled={inputsEmpty}
                    >
                    <Text style={inputsEmpty ? styles.buttonDisabled : styles.button}>SUBMIT</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    header: {
        padding: 10,
        marginTop: 40,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 5,
        borderColor: 'rgb(10, 10, 50)',
        color: 'white',
        marginBottom: 30,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        height: 60,
        backgroundColor: 'rgb(60, 60, 50)'
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        height: 50,
        padding: 8,
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },
    buttonDisabled: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        height: 50,
        padding: 8,
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },
  })
  

export default NewCard