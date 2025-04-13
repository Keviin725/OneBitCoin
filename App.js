
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <StatusBar
        backgroundColor='#D4af37'
        barStyle="dark-content" // ou light-content
      />
      <CurrentPrice/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
    
  },
});
