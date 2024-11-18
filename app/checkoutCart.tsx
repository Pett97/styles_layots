import React from "react";
import { Alert, Text, View } from "react-native";
import FullScreen from "../src/components/containers/FullScreen";
import HeaderWithTitle from "../src/components/headers/HeaderWithTitle";
import { Stack } from "expo-router";
import { useLocalSearchParams } from 'expo-router'; 
import ProductView from "../src/components/product/productView";
import Scrollable from "../src/components/containers/Scrollable";

function CheckoutCart() {
  const{valor,products} = useLocalSearchParams();

  const total:number = valor?parseFloat(valor as string):0;

  const productList = products ? JSON.parse(products as string) : [];

  const handleCheckout = () => {
    Alert.alert('Compra Finalizada!');
  };

  return(
    <FullScreen>
      <Stack>
      <HeaderWithTitle title="Carrinho"/>
      <Scrollable>
      {productList.map((data) => (
            <ProductView
            imagePath={data.imagePath}
            name={data.name}
            description={data.description}
            price={data.price}
          />
      ))}
    </Scrollable>
      <View><Text>Total a Pagar {total}</Text></View>
      </Stack>
    </FullScreen>
  )
}

export default CheckoutCart;
