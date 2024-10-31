import Scrollable from "../components/containers/Scrollable";
import HeaderWithTitle from "../components/headers/HeaderWithTitle";
import Card from "../components/containers/Card";
import { Text } from "react-native";
import PriceTag from "../components/checkout/PriceTag";
import CheckoutButton from "../components/checkout/CheckoutButton";
import { router } from "expo-router";
export default function App() {
  const handleCheckout =()=>{
    router.push("/checkout");
  };


  return (
    <Scrollable>
      <HeaderWithTitle title="Shopp UTFPR"></HeaderWithTitle>

      <Card title="Computador Decente">
        <Text>
        Um PC decente para uso geral deve contar com um processador quad-core, como um Intel Core i5 ou AMD Ryzen 5, garantindo bom desempenho em multitarefas. A memória RAM de pelo menos 16 GB permite rodar aplicativos e jogos mais pesados com fluidez. Um SSD de 512 GB oferece velocidade e espaço para armazenamento rápido de arquivos. A placa de vídeo dedicada, como uma NVIDIA GTX 1660, proporciona gráficos melhores para jogos e design gráfico. Por fim, uma fonte de qualidade e um bom sistema de refrigeração garantem a durabilidade e estabilidade do equipamento.
        by:CHAT CPT
        </Text>
        <PriceTag price={1500} />
      </Card>

      <Card title="Teclado Mancer Shade">
        <Text>
          O teclado Mancer Shade MK2 é o item indispensável para sua próxima
          batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
          Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
          próximo nível!
        </Text>

        <PriceTag price={119} />
      </Card>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!
        </Text>

        <PriceTag price={119} />
      </Card>

      <Card title="Teclado Mancer Shade">
        <Text>
          O teclado Mancer Shade MK2 é o item indispensável para sua próxima
          batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
          Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
          próximo nível!
        </Text>

        <PriceTag price={119} />
      </Card>
      <CheckoutButton onPress={handleCheckout}></CheckoutButton>
    </Scrollable>
  );
}
