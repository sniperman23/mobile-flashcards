import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

class DeckList extends React.Component {
    render() {

        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'Biology 2',
              subtitle: '17 cards'
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Italian',
              subtitle: '4 cards'
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Discrete Structures',
              subtitle: '2 cards'
            },
          ]

        const DeckItem = ({ title, subtitle }) => (
            <TouchableOpacity>
                <View style={styles.item}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </TouchableOpacity>
        )

        const renderItem = ({ item }) => (
            <DeckItem title={item.title} subtitle={item.subtitle}/>
        )

        const AddDeckButton = () => {
            return (
                <TouchableOpacity
                    style={styles.button}
                    >
                    <Text style={styles.button}>CREATE DECK</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Decks</Text>
                </View>

                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                <AddDeckButton />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        padding: 10,
        marginTop: 40,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'rgb(10, 125, 240)',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 20,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white'
    },
    button: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        height: 80,
        textAlign: 'center',
        padding: 15,
        letterSpacing: 1
    }
  })
  

export default DeckList