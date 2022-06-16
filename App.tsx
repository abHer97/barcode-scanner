import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { ScannedData } from './src/pages/ScannedData';
import { Scanner } from './src/pages/Scanner';

export type RootStackParamList = {
   Scanner: undefined;
   ScannedData: { type: string; data: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name='Scanner' component={Scanner}></Stack.Screen>
            <Stack.Screen
               name='ScannedData'
               component={ScannedData}
               options={{
                  title: 'Resultado',
                  animation: 'fade_from_bottom',
                  headerStyle: {
                     backgroundColor: '#246295'
                  }
               }}
            ></Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
   }
});
