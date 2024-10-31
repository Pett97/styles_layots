import React from 'react'
import { Alert, Text} from 'react-native'
import FullScreen from '../components/containers/FullScreen'
import HeaderWithTitle from '../components/headers/HeaderWithTitle'
import Card from '../components/containers/Card'
import PriceTag from '../components/checkout/PriceTag';
import CheckoutButton from '../components/checkout/CheckoutButton'

function checkout() {
  const handleCheckout = ()=>{
    Alert.alert('Sucesso');
  };

  return (
    <FullScreen center>
      <HeaderWithTitle title='checkout!!'></HeaderWithTitle>
      <Card title='Pagamento'>
        <Text>Confirme seu buyagen</Text>
        <PriceTag price={206}></PriceTag>
        <CheckoutButton customTitle='Finalizar' onPress={handleCheckout}></CheckoutButton>
      </Card>
    </FullScreen>
  );
}

export default checkout