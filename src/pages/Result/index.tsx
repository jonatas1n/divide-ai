import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import { useEffect } from "react";

export const Result = () => {
  const { guests, costs, products, calculateTotalCosts } = useAppContext();

  useEffect(() => {
    calculateTotalCosts();
  }, [costs, products, guests, calculateTotalCosts]); 

  return (
    <Container>
      <Header title="Resultados" />
      <Stack spacing={2}>
        {Object.values(guests).map( guest =>
          <Card key={guest.id}>
            <Stack direction="row" p={2}>
              {guest.name}: R$ {guest.totalCost?.toFixed(2)}
            </Stack>
          </Card>
        )}
      </Stack>
    </Container>
  );
};
