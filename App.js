import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const App = () => {

  const [Money, setMoney] = useState(0)
  const [Speed, setSpeed] = useState(0)
  const [Click, setClick] = useState(1)
  const [CostSpeed, setCostSpeed] = useState(10)
  const [CostClick, setCostClick] = useState(10)

  const appClick = () => {
    if(Money >= CostClick){
      setCostClick(Math.round((CostClick * 1.5), 1))
      setMoney(Money - CostClick)
      setClick(Click + 1)
    } else {
      alert('sosi')
    }
  }

  const appSpeed = () => {
    if(Money >= CostSpeed){
      setCostSpeed(Math.round((CostSpeed * 1.5), 1))
      setMoney(Money - CostSpeed)
      setSpeed(Speed + 1)
    } else {
      alert('sosi')
    }
  }

  const autoClick = () => {
    setInterval(() => {
      setMoney(Money + Speed)
    })
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.info__item}>{Money} $</Text>
        <Text style={styles.info__item}>{Click} за клик</Text>
        <Text style={styles.info__item}>{Speed} в секунду</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={appClick}>
          <Text style={styles.btn__text}>Увеличить клик</Text>
          <Text style={styles.btn__text}>Стоимость: {CostClick} $</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={appSpeed}>
          <Text style={styles.btn__text}>Увеличить автоклик</Text>
          <Text style={styles.btn__text}>Стоимость: {CostSpeed} $</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setMoney(Money + Click)}>
          <Text style={styles.btn__text}>Кликайте сюда</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#22364d',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 70,
      paddingBottom: 40,
    },
    info: {
      height: 150,
      padding: 20,
      marginHorizontal: 36,
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 10,
    },  
    info__item: {
      fontSize: 20,
      color: '#22364d'
    },
    btnContainer: {
      marginHorizontal: 36,
      alignSelf: 'stretch',
    },  
    btn: {
      height: 68,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4798f5',
      borderRadius: 10,
    },
    btn__text: {
      fontSize: 18,
      color: '#ffffff',
    }
});

export default App;