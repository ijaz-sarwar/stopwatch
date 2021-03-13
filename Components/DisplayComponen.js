import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
function DisplayComponent(props) {
    const h = () => {
        if (props.time.h === 0) {
            return '';
        } else {
            return <Text>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</Text>;
        }
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ margin: 10, fontSize: 20 }}>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</Text>
            <Text style={{ margin: 10, fontSize: 20 }}>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</Text>
            <Text style={{ margin: 10, fontSize: 20 }}>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</Text>
        </View>
    );
}

export default DisplayComponent;