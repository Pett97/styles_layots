import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DEFAULT_RADIUS } from '../../constants/globalStyles';

type CheckoutButtonProps = {
  onPress:()=>void;
  customTitle?:string;

};

function CheckoutButton({onPress,customTitle = "Checkout"}:CheckoutButtonProps){
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{customTitle}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    borderRadius: DEFAULT_RADIUS,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CheckoutButton