import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        money: 0,
        speed: 0,
        click: 1,
    };
    this.funAutoClick()
  }

  onClick = () => {
    this.setState({
      money: this.state.money + this.state.click
    })
  }

  appClick = () => {
    if(this.state.money >= 10){
      this.setState({
        click: this.state.click + 1,
        money: this.state.money - 10,
      })
    } else {
      alert(`Sosi. You don't have enough money.`)
    }
  }

  autoClick = () => {
    if(this.state.money >= 10){
      this.setState({
        speed: this.state.speed + 1,
        money: this.state.money - 10,
      })
    } else [
      alert(`Sosi. You don't have enough money.`)
    ]
  }

  funAutoClick = () => {
    setInterval(() => {
      this.setState({
        money: this.state.money + this.state.speed,
      })
    }, 1000)
  }
  
  render() {
    const { money } = this.state;
    const { speed } = this.state;
    const { click } = this.state;
    return (
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.info__item}>{this.state.money} $</Text>
            <Text style={styles.info__item}>{this.state.click} за клик</Text>
            <Text style={styles.info__item}>{this.state.speed} в секунду</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={this.appClick}>
              <Text style={styles.btn__text}>Увеличить клик</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.autoClick}>
              <Text style={styles.btn__text}>Увеличить автоклик</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.onClick}>
              <Text style={styles.btn__text}>Кликайте сюда</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
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
      marginTop: 20,
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


export default App;