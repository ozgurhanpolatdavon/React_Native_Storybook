import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Task = ({
    task : {id , title, state},
    onArchiveTask,
    onPinTask,
}) => {
    return (
        <View style={styles.listItem}>
            <TextInput value={title} editable={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {

    }
})

export default Task;
