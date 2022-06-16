import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { setStringAsync } from 'expo-clipboard';

import { RootStackParamList } from '../../App';
import { SafeView } from '../components/SafeView';

type ScannedDataProps = NativeStackScreenProps<RootStackParamList, 'ScannedData'>;
// export interface ScannedDataProps {}

export const ScannedData = ({ navigation, route }: ScannedDataProps) => {
   const copyToClipboard = () => {
      setStringAsync(route.params.data).then(() => {
         ToastAndroid.show('Copiado', ToastAndroid.SHORT);
      });
   };

   return (
      <SafeView>
         <View style={styles.container}>
            <Text>{route.params.data}</Text>
            <Text>{route.params.type}</Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.button}>
               <Text>Copiar</Text>
            </TouchableOpacity>
         </View>
      </SafeView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   button: {
      backgroundColor: 'lightgray',
      flex: 0,
      alignItems: 'center',
      padding: 10,
      borderRadius: 4
   }
});
