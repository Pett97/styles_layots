import Scrollable from "../src/components/containers/Scrollable";
import ProductView from "../src/components/product/productView";
import { ShoopingCart } from '../src/services/shoppingCart';
import { Product } from "../src/services/product";
import { Link, router } from "expo-router";
import {Text, TouchableOpacity } from "react-native";
import FullScreen from "../src/components/containers/FullScreen";
import HeaderWithTitle from "../src/components/headers/HeaderWithTitle";
import Button from "../src/components/button/button";

interface ProductInterface {
  id:number,
  imagePath: string;
  name: string;
  description: string;
  price: number;
}

const list: ProductInterface[] = [
  {
    id:1,
    name: "Computador ",
    imagePath: require("../src/assets/pc.jpg"),
    description: "Um PC decente para uso geral",
    price: 1500,
  },
  {
    id:2,
    name: "Mouse sem Fio ",
    imagePath: require("../src/assets/mouse.jpg"),
    description: "mouse sem fio para jogadores de CS2",
    price: 100,
  },
  {
    id:3,
    name: "teclado retroilumiado ",
    imagePath: require("../src/assets/keyboard.jpg"),
    description: "teclado marca xingling",
    price: 200,
  },
  {
    id:4,
    name: "Mouse sem Fio 2  ",
    imagePath: require("../src/assets/mouse.jpg"),
    description: "mouse sem fio para jogadores de CS2",
    price: 100,
  },
  {
    id:5,
    name: "Mouse sem Fio 3  ",
    imagePath: require("../src/assets/mouse.jpg"),
    description: "mouse sem fio para jogadores de CS2",
    price: 100,
  },
  {
    id:6,
    name: "Mouse sem Fio 4",
    imagePath: require("../src/assets/mouse.jpg"),
    description: "mouse sem fio para jogadores de CS2",
    price: 100,
  },
];

export default function App() {
  const shoopingCart = new ShoopingCart();

  const handleCheckout = ()=>{
    const fullValor:number = shoopingCart.getFullPrice();
    const allProducts:Product[] = shoopingCart.getAllProducts();
    router.push({
      pathname:"/checkoutCart",
      params:{
        valor:fullValor.toString(),
        products:JSON.stringify(allProducts)
      }
    });

  };

  const handleCreateProduct = (imagePath:string,productName: string,descriptionProduct: string,price: number)=>{
    let product = new Product(imagePath,productName,descriptionProduct,price);
    shoopingCart.addNewProduct(product);

    //console.log(shoopingCart.getAllProducts());
  }
  return (
   <FullScreen>
    <HeaderWithTitle title="Produtos"/>
     <Scrollable>
      {list.map((data) => (
          <TouchableOpacity key={data.id} onPress={()=>handleCreateProduct(data.imagePath,data.name,data.description,data.price)}>
            <ProductView
            key={data.id}
            imagePath={data.imagePath}
            name={data.name}
            description={data.description}
            price={data.price}
          />
          </TouchableOpacity>
      ))}
    </Scrollable>
    <Button title="Carrinho" onPress={handleCheckout} ></Button>
   </FullScreen>
  );
}
