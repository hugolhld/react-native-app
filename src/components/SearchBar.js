import React from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default class SearchBar extends React.Component {
    render() {
        img: this.props.img
        return (
            <View style={styles({}).container}>
                <View style={styles({}).inputContainer}>
                    <Image
                    style={styles({}).tinyLogo}
                    source={this.props.img}
                    />
                    <TextInput style={styles({}).textInput} />
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
        borderRadius: 7.5
    },

    inputContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 5,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 7.5,
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
        resizeMode:'contain'
    }
})