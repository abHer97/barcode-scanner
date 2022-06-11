import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export interface SafeViewProps {
   children?: React.ReactNode;
   backgroundColor?: string;
   statusBarColor?: string;
   padding?: number;
}

export const SafeView = ({
   children,
   backgroundColor = '#fff',
   statusBarColor = '#246295',
   padding = 20
}: SafeViewProps) => {
   return (
      <SafeAreaView
         style={{
            flex: 1,
            padding,
            backgroundColor
         }}
      >
         <StatusBar backgroundColor={statusBarColor} />
         {children}
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      // marginTop: StatusBar.currentHeight
   }
});
