import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, StyleSheet, Text, View } from 'react-native';

import { SafeView } from './SafeView';

export interface ScannerProps {}

export const Scanner = ({}: ScannerProps) => {
   const [hasPermission, setHasPermission] = useState<boolean | null>(null);

   const [scannedData, setScannedData] = useState({
      data: '',
      type: ''
   });

   const [scanned, setScanned] = useState(false);

   useEffect(() => {
      (async () => {
         const { status } = await BarCodeScanner.requestPermissionsAsync();
         setHasPermission(status === 'granted');
      })();
   }, []);

   const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
      setScanned(true);
      setScannedData({ data, type });
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
   };

   if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   return (
      <SafeView backgroundColor='#4079bc'>
         <View style={styles.container}>
            <View>
               <Text style={styles.title}>Escanear</Text>
            </View>
            <View style={styles.container}>
               <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={StyleSheet.absoluteFillObject}
               />
               {scanned && (
                  <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
               )}
            </View>
         </View>
      </SafeView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
      // backgroundColor: '#4079bc'
   },
   scanner: {
      width: '100%',
      height: '65%'
      // alignSelf: 'center'
   },
   title: {
      fontSize: 40,
      textAlign: 'center',
      color: '#fff',
      marginBottom: 40
   }
});
