import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={styles.container}>
      <Text>{this.props.route.params.item.split("@!?!")}</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default Item;
