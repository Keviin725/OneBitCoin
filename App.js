
import { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationsList';




function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

function url(qtdDays) {
  const date = new Date();
  const endTime = date.getTime(); // Timestamp atual em milissegundos
  
  date.setDate(date.getDate() - qtdDays);
  const startTime = date.getTime(); // Timestamp de 'qtdDays' atrás
  
  return `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&startTime=${startTime}&endTime=${endTime}&limit=${qtdDays}`;
}

async function getListCoins(url) {
  try {
   // console.log("Fetching from:", url);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    //console.log("Binance API Response:", data);
    
    if (data.code) { // Se houver erro na resposta da Binance
      throw new Error(`Binance API Error: ${data.msg} (code ${data.code})`);
    }
    
    // Processa os candles (cada item é um array)
    return data.map(item => ({
      data: new Date(item[0]).toLocaleDateString('pt-BR'), // Formata data
      valor: parseFloat(item[4]) // Preço de fechamento (índice 4)
    })).reverse();
    
  } catch (error) {
    console.error("API Error:", error.message);
    return []; // Retorna array vazio em caso de erro
  }
}

async function getPriceCoinsChart(url) {
  try {
    //console.log("Fetching chart data from:", url);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    //console.log("Binance Chart Data:", data);
    
    if (data.code) { // Se houver erro na resposta da Binance
      throw new Error(`Binance API Error: ${data.msg} (code ${data.code})`);
    }
    
    // Retorna array simples de preços de fechamento
    return data.map(item => parseFloat(item[4])).reverse();
    
  } catch (error) {
    console.error("Chart API Error:", error.message);
    return []; // Retorna array vazio em caso de erro
  }
}

export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coinsChartList, setCoinsChartList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [currentPrice, setCurrentPrice] = useState(null);

  function updateDay(number) {
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() =>{
    
    const fetchCurrentPrice = async () => {
      try {
          const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
          const data = await response.json();
          setCurrentPrice(data.price);
      } catch (error) {
          console.error("Error fetching current price:", error);
      }
    }
    
    getListCoins(url(days)).then((data)=>{
      setCoinsList(data)
    })
    
    getPriceCoinsChart(url(days)).then((dataC) =>{
      setCoinsChartList(dataC)
    })
    
    if (updateData) {
      setUpdateData(false)
    }


    fetchCurrentPrice();
    const interval = setInterval(fetchCurrentPrice, 30000);
    return () => clearInterval(interval);
  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
     
      <StatusBar
        backgroundColor='#f7931a'
        barStyle="dark-content" // ou light-content
      />
      <CurrentPrice currentPrice={currentPrice}/>
      <HistoryGraphic infoDataChart={coinsChartList}/>
      <QuotationList filterDay={updateDay} listTransactions ={coinsList}/>
     
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
