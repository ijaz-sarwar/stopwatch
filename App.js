import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Button,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import React, { useState } from 'react';
import DisplayComponent from './Components/DisplayComponen';
import BtnComponent from './Components/BtnComponent';
import FlatLists from './Components/FlatLists';


function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [text, setText] = useState(0);
  const [modalVisible, setModalVisible] = useState('false')
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  };
  const finish = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  };
  const resume = () => start();
  const handleSubmit = () => {

  }

  return (
    <View style={{ flex: 1, background: 'transparent', maxWidth: 600, width: '90%', height: 500, margin: 30 }}>
      <View>
        <DisplayComponent time={time} />
        <BtnComponent status={status} finish={finish} resume={resume} reset={reset} stop={stop} start={start} />
        <FlatLists time={time} />
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={{ backgroundColor: 'white', margin: 20, marginTop: 200, height: 200, justifyContent: 'center', padding: 20 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
            onChangeText={text => setText(text)}
            value={text}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>

      </Modal> */}
    </View>

  );
}

export default App;