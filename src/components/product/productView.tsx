import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./product.style";
import Price from "../price/price";

type productProps= {
  imagePath:any,
  name:string,
  description:string,
  price:number
} 

function ProductView({imagePath,name,description,price}:productProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={imagePath}
          style={styles.image}>
          </Image>
      </View>

      <View style={styles.infoProduct}>
        <Text style={styles.productName}>{name}</Text>
        <Text>{description}</Text>
        <View style={styles.priceProduct}>
          <Price productPrice={price}></Price>
          <Text>x1</Text>
        </View>
      </View>
    </View>
  );
}

export default ProductView;
