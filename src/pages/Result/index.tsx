import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { useAppContext } from "../../hooks/Context";
import { ItemStyle } from "../../components/Item";

import { useEffect } from "react";

export const Result = () => {
  const { guests, costs, products, calculateTotalCosts } = useAppContext();

  useEffect(() => {
    calculateTotalCosts();
  }, [costs, products, guests, calculateTotalCosts]); 

  return (
    <Container>
      <Header title="Resultados" />
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
