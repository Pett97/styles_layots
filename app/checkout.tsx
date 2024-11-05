import React from 'react';
import { Text, Alert, View } from 'react-native';
import FullScreen from '../src/components/containers/FullScreen';
import HeaderWithTitle from '../src/components/headers/HeaderWithTitle';
import Card from '../src/components/containers/Card';
import CheckoutButton from '../src/components/checkout/CheckoutButton';
import { useLocalSearchParams } from 'expo-router';  

function Checkout() {
  const {valor,products } = useLocalSearchParams();

  const totalPay = valor?parseFloat(valor as string):0;

  const productList = products ? JSON.parse(products as string) : [];

  const handleCheckout = () => {
    Alert.alert('Compra Finalizada!');
  };

  return (
    <FullScreen center>
      <HeaderWithTitle title="Checkout" />

      {/* Exibindo os produtos */}
      {productList.map((product: any, index: number) => (
        <Card key={index} title={product.title}>
          <Text>{product.description}</Text>
          <Text>Preço: {product.price}</Text>
        </Card>
      ))}
      <View><Text>Total a Pagar {totalPay}</Text></View>
      <CheckoutButton customTitle="Finalizar Compra" onPress={handleCheckout} />
    </FullScreen>
  );
}

export default Checkout;
