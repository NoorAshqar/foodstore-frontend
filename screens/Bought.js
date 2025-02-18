import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Bought extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[],
    };
  }
  componentDidMount(){
    AsyncStorage.getItem("token").then((token)=>{
    let id=token.split(' ')[2]
    fetch(`http://foodstores.herokuapp.com/get/restaurant/${id}`)
    .then((res)=>res.json())
    .then((res)=>{this.setState({items:res.items})})
    .catch((error)=>console.error(error))})
  }
  render() {
    return(
    <View style={styles.container}>
        <View style={styles.container}>
        {this.state.items?.map((item,i)=>(<View style={styles.item}  key={i}><TouchableOpacity><Image style={styles.img}
            source={{uri:item[0]}} /></TouchableOpacity><Text style={{textAlign:'center'}}>{item[1]}</Text><Text style={{textAlign:'center'}}>{item[2]}</Text><Text style={{textAlign:'center'}}>${item[3]}</Text></View>))}
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
      },
      display: {
        display:"flex",
        alignContent:'center',
        justifyContent:'flex-start',
        flexDirection:"column",
        flexWrap:'wrap',
        width:300,
        height:800,
        margin:10,
        textAlign:'center',
      },
      img: {
        borderRadius:12,
        width: 100,
        height: 100,
        margin: 5,
      },
      button: {
        backgroundColor: "orange",
        height: 30,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        textAlign: "center",
        marginTop: 30,
        paddingTop: 5,
      },
});

export default Bought;