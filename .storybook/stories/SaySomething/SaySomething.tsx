import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
    something : string
}

const SaySomething = (props : any) : JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>{props.something}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default SaySomething;
