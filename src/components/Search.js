import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles({}).container}>
                <TextInput style={styles({isValid: false}).textInput} />
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        marginVertical: 90,
        marginHorizontal: 50
    },

    textInput: {
        borderWidth: 1,
        borderColor: props.isValid ? '#000' : '#FF0000',
        padding: 5
    }
})