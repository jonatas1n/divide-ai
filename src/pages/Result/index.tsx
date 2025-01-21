import { Container } from "../../components/Container";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import { Table, TableBody, TableCell, TableRow } from "@mui/material";

export const Result = () => {
  const { guests, costs, products } = useAppContext();

  const updatedGuestsCosts = Object.values(costs).reduce<
    Record<string, number>
  >((acc, cost) => {
    const total = Object.values(cost.products)
      .filter((product) => product.productID)
      .reduce((sum, currentValue) => {
        const unitCost =
          products[currentValue.productID]?.price ?? 0;
        return sum + unitCost * currentValue.quantity;
      }, 0);

    cost.guests
      .filter((guestID) => guests[guestID])
      .forEach((guestID) => {
        acc[guestID] = (acc[guestID] ?? 0) + total / cost.guests.length;
      });

    return acc;
  }, {});

  return (
    <Container title="Resultados">
      <Stack spacing={2}>
        <Card>
          <Table>
            <TableBody>
              {Object.entries(updatedGuestsCosts).map(([guestID, cost]) => (
                <TableRow key={guestID}>
                  <TableCell>{guests[guestID].name}</TableCell>
                  <TableCell align="right">
                    $ {cost.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Stack>
    </Container>
  );
};
