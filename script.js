import React, {setstate, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [Money, setMoney] = useState(0)
  const [Speed, setSpeed] = useState(0)
  const [Click, setClick] = useState(1)

  const AutoClick = () => {
    setInterval(() => {
      setMoney(Money + Speed)
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.info__item}>{Money} $</Text>
        <Text style={styles.info__item}>{Click} за клик</Text>
        <Text style={styles.info__item}>{Speed} в секунду</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={() => {Money >= 10 ? (setClick(Click + 1), setMoney(Money - 10)) : null} }>
          <Text style={styles.btn__text}>Увеличить клик</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {Money >= 10 ? AutoClick(setSpeed(Speed + 1), setMoney(Money - 10)) : null} }>
          <Text style={styles.btn__text}>Увеличить автоклик</Text>
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
    paddingTop: 50,
    paddingBottom: 40,
  },
  info: {
    width: 300,
    height: 130,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
  },  
  info__item: {
    fontSize: 18,
    color: '#22364d'
  },  
  btn: {
    width: 300,
    height: 70,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4798f5',
    borderRadius: 10,
    overlayColor: '#4798f5',
  },
  btn__text: {
    fontSize: 18,
    color: '#ffffff',
  }
});
