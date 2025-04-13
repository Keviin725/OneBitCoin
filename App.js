
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationsList';
import QuotationItems from './src/components/quotationsList/quotationsItems';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <StatusBar
        backgroundColor='#f7931a'
        barStyle="dark-content" // ou light-content
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItems/>
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
