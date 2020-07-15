import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class DeckDetails extends React.Component {
    render() {

        const DATA = {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Biology 2',
            subtitle: '17 cards'
        }

        const AddCardButton = ({ title }) => {
            return (
                <TouchableOpacity
                    style={styles.button}
                    >
                    <Text style={styles.button}>{title}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{DATA.title}</Text>
                    <Text style={styles.subtitle}>{DATA.subtitle}</Text>
                </View>

                <View style={styles.buttonGroup}>
                    <AddCardButton title="START QUIZ"/>
                    <AddCardButton title="ADD A CARD"/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
        fontSize: 30,
        textAlign: 'center'
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
    buttonGroup: {
        marginTop: 100,
    }
  })
  

export default DeckDetails