import React from 'react';
import { StyleSheet, Button, TouchabeOpacity, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permission';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state= {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
        }
    }

    getCameraPermission= async()=>{
        const {status}= await Permissions.askAsync(permissions.CAMERA)
        this.setState=({
            hasCameraPosition: status==="granted"
        })
    }
    handleBarCodeScanned= async({type,data})=>{
        this.setState({
            scanned: true,
        scannedData: data,
        buttonState: 'normal',
    })
    }
    render(){
        const hasCameraPermissions= this.state.hasCameraPermissions
        const scanned= this.state.scanned
        buttonState= this.state.buttonState
    if (buttonState===clicked && hasCameraPermissions){
        return(
            <BarcodeScanner
            onBarcodeScanned= {scanned? undefined: this.handleBarCodeScanned}
            style= {StyleSheet.absoluteFillObject}
            />
        )
        }
        
    else if( buttonState=== normal ){
        return(
            <View style= {styles.container}>
                <Text style= {styles.displayText}>
                    hasCameraPermission=== true?
                    this.state.scannedData
                    :"requestCameraPermission"
                    </Text>
                <TouchableOpacity style= {styles.scanButton}>
                    onPress={this.getCameraPermission}
                    <Text>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        )
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    displayText: {
        fontSize:  50,
        textDecorativeLine: 'underline',
    },
    scanButton: {
        backgroundColor: '#2196f3',
        padding: 10,
        margin: 10,
    }
  });