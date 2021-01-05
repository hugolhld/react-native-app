import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class ListItem extends React.Component {
    render() {
        img:this.props.img
        return (
            <View style={styles({}).container}>
                <Image
                style={styles({}).itemImg}
                source={this.props.img}
                ></Image>
                <View style={styles({}).itemLabel}>
                    <Text>{this.props.title}</Text>
                    <Text style={styles({}).itemDate}>{this.props.date}</Text>
                </View>
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#00000050"
    },
    itemImg: {
        width: 60,
        height: 80,
        resizeMode:'contain'
    },
    itemLabel:{
        display:'flex',
        marginLeft:20
    },
    itemDate:{
        color:"#5c5c5c"
    }
})