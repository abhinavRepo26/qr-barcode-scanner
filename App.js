/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const App = () => {
  const [flash, setFlash] = useState(false);
  const onSuccess = e => {
    console.log(e.data);
    Alert.alert(e.data);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={flash ? RNCamera.Constants.FlashMode.torch : null}
      topContent={
        <Text style={styles.centerText}>Scan any QR and Bar Code</Text>
      }
      bottomContent={
        <>
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFlash(!flash)}>
            <Text>Flash: {flash ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;
