

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry
} from 'react-native';
import { whileStatement } from '@babel/types';


type Props = {};
export default class tone extends Component<Props> {

  

  increaseCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }             

  decreaseCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }

  render() {
    return (
      <React.Fragment>
      .
      <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ backgroundColor : 'rgb(231,204,175)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black'}}> Milk Shake</Text>
            <Text style={{ backgroundColor: 'rgb(236,198,164)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black' }}> Angel Food</Text>
            <Text style={{ backgroundColor: 'rgb(232,195,157)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black' }}> Vanilla</Text>
            <Text style={{ backgroundColor: 'rgb(230,197,160)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Panna Cotta </Text>
<Text style={{ backgroundColor: 'rgb(228,182,136)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Cashew </Text>
<Text style={{ backgroundColor: 'rgb(212,171,124)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Creme Brulee </Text>

          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ backgroundColor : 'rgb(212,175,138)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black'}}> Short Bread</Text>
            <Text style={{ backgroundColor: 'rgb(218,174,135)', flex: 1, textAlignVertical: 'center', textAlign: 'center', color:'black'}}> Chai</Text>
            <Text style={{ backgroundColor: 'rgb(208,170,134)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Cheesecake </Text>
            <Text style={{ backgroundColor: 'rgb(209,171,137)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Macaroon</Text>
<Text style={{ backgroundColor: 'rgb(213,169,132)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Toasted Coconut </Text>
<Text style={{ backgroundColor: 'rgb(204,157,117)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black' }}>Custard </Text>


          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ backgroundColor : 'rgb(200,170,134)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black'}}> Latte</Text>
            <Text style={{ backgroundColor: 'rgb(209,162,116)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'black' }}> Amaratte</Text>
            <Text style={{ backgroundColor: 'rgb(201,157,108)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Tres Leches </Text>
            <Text style={{ backgroundColor: 'rgb(191,144,101)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Butter Pecan</Text>
<Text style={{ backgroundColor: 'rgb(190,141,92)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Baklava </Text>
<Text style={{ backgroundColor: 'rgb(184,132,88)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'black'}}>Duice De Leche </Text>

          </View>

           <View style={{ flex: 1, flexDirection: 'row' }}>
                                   <Text style={{ backgroundColor: 'rgb(190,136,81)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'white' }}> Brown Sugar</Text>

           
            <Text style={{ backgroundColor : 'rgb(182,128,75)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'white'}}> Macchiato</Text>

            <Text style={{ backgroundColor: 'rgb(175,120,61)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}>Ginger Bread</Text>

<Text style={{ backgroundColor: 'rgb(171,116,69)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}>Cinnamon</Text>
            <Text style={{ backgroundColor: 'rgb(177,128,78)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}>Toffee </Text>

<Text style={{ backgroundColor: 'rgb(156,109,65)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}>Chocolate Mousse</Text>

          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ backgroundColor: 'rgb(140,99,62)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}>Nutmeg </Text>
                       <Text style={{ backgroundColor: 'rgb(140,98,56)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}> Cocoa</Text>

            <Text style={{ backgroundColor : 'rgb(148,94,55)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'white'}}> Mochq</Text>


            <Text style={{ backgroundColor: 'rgb(118,73,49)', flex: 1, textAlignVertical: 'center', textAlign: 'center' ,color:'white'}}>Coffee Bean </Text>
<Text style={{ backgroundColor: 'rgb(104,69,44)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'white' }}>Hot udge </Text>

<Text style={{ backgroundColor: 'rgb(95,57,21)', flex: 1, textAlignVertical: 'center', textAlign: 'center',color:'white' }}>Chocolate Truffle </Text>

          </View>
         
          </React.Fragment>
          
    );
  }
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});
