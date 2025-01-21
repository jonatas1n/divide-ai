import { useMemo } from "react";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import TableBody from "@mui/material/TableBody";

import Table from "@mui/material/Table";
import Zoom from "@mui/material/Zoom";
import { GuestCostRow } from "../../components/GuestCosRow";

import Typography from "@mui/material/Typography";
import { NavigationHeader } from "../../components/NavigationHeader";

export const Result = () => {
  const { guests, costs, products } = useAppContext();

  const updatedGuestsCosts = useMemo(() => {
    return Object.values(costs).reduce<Record<string, number>>((acc, cost) => {
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
  }, [costs, products, guests]);

  const totalCost = useMemo(
    () => Object.values(updatedGuestsCosts).reduce((sum, currentValue) => sum + currentValue, 0),
    [updatedGuestsCosts]
  );

  const emptyStateMessage = Object.keys(guests).length === 0
    ? "Adicione participantes para começar."
    : "Registre consumos e participantes para visualizar os custos.";

  return (
    <>
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
                    <GuestCostRow
                      key={guestID}
                      guestName={guests[guestID].name}
                      cost={cost}
                    />
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
          {emptyStateMessage}
        </Typography>
      )}
    </>
  );
};
