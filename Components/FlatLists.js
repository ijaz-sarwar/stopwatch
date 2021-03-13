import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList
} from 'react-native';
function FlatLists() {
    return (
        <FlatList
            data={FlatLists}
            renderItem={({ item, index }) => {
                console.log(item, 'lap in flatlist', index);

                return (

                    <Text key={index} >{item.time}</Text>
                )
            }}
        />
    )
}

export default FlatLists
