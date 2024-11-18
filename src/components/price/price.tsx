import React from "react";
import { Text, View } from "react-native";
import styles from "./price-style";
type priceProps={
  productPrice:number
}

function Price({productPrice}:priceProps) {
  return <View>
    <Text style={styles.text}>R$ {productPrice}</Text>
  </View>;
}

export default Price;
