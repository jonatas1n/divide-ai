import { Container } from "../../components/Container";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import { useEffect } from "react";
import { Table, TableCell, TableRow } from "@mui/material";

export const Result = () => {
  const { guests, costs, products, calculateTotalCosts } = useAppContext();

  useEffect(() => {
    calculateTotalCosts();
  }, [costs, products, guests, calculateTotalCosts]);

  return (
    <Container title="Resultados">
      <Stack spacing={2}>
        <Card>
          <Table>
            {Object.values(guests).map((guest) => (
              <TableRow key={guest.id}>
                <TableCell>{guest.name}</TableCell>
                <TableCell align="right">
                  R$ {guest.totalCost?.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Card>
      </Stack>
    </Container>
  );
};
