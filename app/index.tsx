import Scrollable from "../src/components/containers/Scrollable";
import HeaderWithTitle from "../src/components/headers/HeaderWithTitle";
import Card from "../src/components/containers/Card";
import PriceTag from "../src/components/checkout/PriceTag";
import CheckoutButton from "../src/components/checkout/CheckoutButton";
import { router } from "expo-router";
import { ShoopingCart } from "../src/services/shoppingCart";
import { Product } from "../src/services/product";
import { Image, Text, View } from "react-native";

interface ProductInterface {
  title: string;
  imagePath:string,
  description: string;
  price: number;
}

const list: ProductInterface[] = [
  {
    title: "Computador ",
    imagePath:require("../src/assets/pc.jpg"),
    description:"Um PC decente para uso geral deve contar com um processador quad-core, como um Intel Core i5 ou AMD Ryzen 5, garantindo bom desempenho em multitarefas. A memória RAM de pelo menos 16 GB permite rodar aplicativos e jogos mais pesados com fluidez. Um SSD de 512 GB oferece velocidade e espaço para armazenamento rápido de arquivos. A placa de vídeo dedicada, como uma NVIDIA GTX 1660, proporciona gráficos melhores para jogos e design gráfico. Por fim, uma fonte de qualidade e um bom sistema de refrigeração garantem a durabilidade e estabilidade do equipamento.by:CHAT CPT",
    price: 1500,
  },
  {
    title: "Mouse sem Fio ",
    imagePath:require("../src/assets/mouse.jpg"),
    description: "mouse sem fio para jogadores de CS2",
    price: 100,
  },
  {
    title: "teclado retroilumiado ",
    imagePath: require("../src/assets/keyboard.jpg"),
    description: "teclado marca xingling",
    price: 200,
  },
];

export default function App() {
  const shoopingCart = new ShoopingCart();
  const handleCheckout = () => {
    const fullValor = shoopingCart.getFullPrice();
    const produtos = shoopingCart.getAllProducts();
    router.push({
      pathname: "/checkout", 
      params: {
        valor: fullValor.toString(),
        products: JSON.stringify(produtos)
      },
    });
  };

  const handleAddProduct = (productName: string,descriptionProduct: string,price: number) => {
    let product = new Product(productName, descriptionProduct, price);
    shoopingCart.addNewProduct(product);
  };

  return (
    <Scrollable>
      <HeaderWithTitle title="Shopp UTFPR"></HeaderWithTitle>

      {list.map((product, index) => (
        <View>
          <Card key={index} title={product.title}>
            <Image source={product.imagePath} style={{ width: 200, height: 200 }} />
            <Text>{product.description}</Text>
            <PriceTag price={product.price} />
          </Card>
          <CheckoutButton onPress={()=>handleAddProduct(product.title,product.description,product.price)} customTitle="Adicionar"></CheckoutButton>
        </View>
      ))}
      <CheckoutButton onPress={()=>handleCheckout()}></CheckoutButton>
    </Scrollable>
  );
}
