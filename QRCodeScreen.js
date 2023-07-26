import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = () => {
    const [qrCodeContent, setQRCodeContent] = useState('');
    const [isScannerOpen, setIsScannerOpen] = useState(false);
  
    const handleQRCodeScan = (event) => {
      if (event.data) {
        setQRCodeContent(event.data);
        setIsScannerOpen(false);
      }
    };
  
    const renderScanner = () => {
      return (
        <View style={styles.container}>
          <QRCodeScanner
            onRead={handleQRCodeScan}
            showMarker={true}
            reactivate={true}
            reactivateTimeout={5000}
            markerStyle={styles.markerStyle}
            cameraStyle={styles.cameraStyle}
          />
        </View>
      );
    };
  
    const renderQRCodeGenerator = () => {
      return (
        <View style={styles.container}>
          <QRCode
            value={qrCodeContent}
            size={250}
            backgroundColor="white"
            color="black"
          />
          <Text style={styles.contentText}>{qrCodeContent}</Text>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        {isScannerOpen ? renderScanner() : renderQRCodeGenerator()}
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsScannerOpen(!isScannerOpen)}
        >
          <Text style={styles.buttonText}>
            {isScannerOpen ? 'Generate QR Code' : 'Open Scanner'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    markerStyle: {
      borderColor: '#FFF',
      borderRadius: 10,
      borderWidth: 2,
    },
    cameraStyle: {
      height: 300,
      width: 300,
    },
    contentText: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default QRCodeScreen;