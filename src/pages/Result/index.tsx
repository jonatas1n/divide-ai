import { Container } from "../../components/common/Container";
import { Header } from "../../components/common/Header";
import { Content } from "../../components/common/Content";
import { useAppContext } from "../../hooks/Context";
import { ItemStyle } from "../../components/common/Item";

import { useEffect } from "react";

export const Result = () => {
  const { guests, costs, products, calculateTotalCosts } = useAppContext();

  useEffect(() => {
    calculateTotalCosts();
  }, [costs, products, guests, calculateTotalCosts]); 

  return (
    <Container>
      <Header>
        <a href="/guests">Ir participantes</a>
        <a href="/products">Ir para produtos</a>
        <a href="/costs">Ir para gastos</a>
        <h1>Resultado</h1>
      </Header>
      <Content>
        {Object.values(guests).map( guest =>
          <ItemStyle key={guest.id}>
            {guest.name}: R$ {guest.totalCost?.toFixed(2)}
          </ItemStyle>
        )}
      </Content>
    </Container>
  );
};
