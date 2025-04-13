
import { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationsList';



function addZero(number) {
  if (number <=9) {
    return "0" + number
  }
  return number
}

function url(qtdDays) {
  const date = new Date()
  const listLastDays = qtdDays

  const end_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`

  date.setDate(date.getDate() - listLastDays)

  const start_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins(url) {
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
    return{
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations(key)
    }
  })
  let data = queryCoinsList.reverse()
  return data
}

async function getPriceCoinsChart(url) {
  let responseC = await fetch(url)
  let returnApiC = await response.json()
  let selectListQuotationsC = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotationsC).map((key)=>{
    return{
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotationsC(key)
    }
  })
  let dataC = queryCoinsList
  return dataC
}

export default function App() {

  const [coinsList, setCoinsList] = useState([])
  const [coinsChartList, setCoinsChartList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)

  function updateDay(number) {
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() =>{
    getListCoins(url(days)).then((data)=>{
      setCoinsList(data)
    })

    getPriceCoinsChart(url(days)).then((dataC) =>{
      setCoinsChartList(dataC)
    })

    if (updateData) {
      setUpdateData(false)
    }
  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
     
      <StatusBar
        backgroundColor='#f7931a'
        barStyle="dark-content" // ou light-content
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList filterDay={updateDay} ListTransactions ={coinsList}/>
     
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
