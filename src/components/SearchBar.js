import React from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles({}).container}>
                <View style={styles({}).inputContainer}>
                    <Image
                    style={styles({}).tinyLogo}
                    source={require('../img/loupe.svg')}
                    />
                    <TextInput style={styles({isValid: false}).textInput} />
                </View>
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        paddingVertical: 50,
        // paddingHorizontal: 50,
        backgroundColor: '#FF0000',
        borderRadius: 10
    },

    inputContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 15,
    },

    textInput: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginLeft: 10,
    },

    tinyLogo: {
        width: 25,
        height: 25,
        marginLeft: 10,
    }
})