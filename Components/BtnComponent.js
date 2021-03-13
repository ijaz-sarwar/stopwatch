import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
function BtnComponent(props) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {(props.status === 0) ?

                    <TouchableOpacity style={{ height: 50, width: 60, borderRadius: 10, margin: 10, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                        onPress={props.start}
                    >
                        <Text>Start</Text>
                    </TouchableOpacity>
                    : ""
                }
            </Text>


            <Text>
                {(props.status === 1) ?
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                        <TouchableOpacity style={{ height: 50, width: 60, borderRadius: 10, margin: 10, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                            onPress={props.finish}
                        >
                            <Text>Finish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50, width: 60, borderRadius: 10, margin: 10, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
                            onPress={props.stop}
                        >
                            <Text>Stop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50, width: 60, borderRadius: 10, margin: 10, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                            onPress={props.reset}
                        >
                            <Text>Reset</Text>
                        </TouchableOpacity>

                    </View> : ""
                }
            </Text>

            <Text>
                {(props.status === 2) ?
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ height: 50, width: 60, margin: 10, borderRadius: 10, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                            onPress={props.resume}
                        >
                            <Text>Resume</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50, width: 60, margin: 10, borderRadius: 10, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}
                            onPress={props.reset}
                        >
                            <Text>Reset</Text>
                        </TouchableOpacity>

                    </View> : ""
                }

            </Text>
        </View>
    );
}

export default BtnComponent;