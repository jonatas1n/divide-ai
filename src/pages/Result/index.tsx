import { Container } from "../../components/Container";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { NavigationHeader } from "../../components/NavigationHeader";

export const Result = () => {
  const { guests, costs, products } = useAppContext();

  const updatedGuestsCosts = Object.values(costs).reduce<
    Record<string, number>
  >((acc, cost) => {
    const total = Object.values(cost.products)
      .filter((product) => product.productID)
      .reduce((sum, currentValue) => {
        const unitCost = products[currentValue.productID]?.price ?? 0;
        return sum + unitCost * currentValue.quantity;
      }, 0);

    cost.guests
      .filter((guestID) => guests[guestID])
      .forEach((guestID) => {
        acc[guestID] = (acc[guestID] ?? 0) + total / cost.guests.length;
      });

    return acc;
  }, {});

  const totalCost = Object.values(updatedGuestsCosts).reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );

  return (
    <Container>
      <NavigationHeader
        previousOption={{
          href: "/conta-bar/costs",
          label: "Voltar para consumos",
        }}
      />
      {Object.keys(updatedGuestsCosts).length !== 0 ? (
        <Stack spacing={2}>
          <Card>
            <Table>
              <TableBody>
                {Object.entries(updatedGuestsCosts).map(([guestID, cost]) => (
                  <TableRow key={guestID}>
                    <TableCell>
                      <Typography variant="h6">
                        {guests[guestID].name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6">$ {cost.toFixed(2)}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
          <Typography pr={2} variant="h6" align="right">
            Total: $ {totalCost.toFixed(2)}
          </Typography>
        </Stack>
      ) : (
        <Typography variant="h6" align="center" p={2}>
          Sem consumos. Registre consumos e participantes, e essa tela será
          atualizada :)
        </Typography>
      )}
    </Container>
  );
};
