import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type PriceTagProps={
  price:number;
};

function PriceTag({price}:PriceTagProps) {
  return (
    <View>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
  },
});

export default PriceTag