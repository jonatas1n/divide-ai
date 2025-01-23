import { useMemo } from "react";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import TableBody from "@mui/material/TableBody";

import Table from "@mui/material/Table";
import { GuestCostRow } from "../../components/GuestCosRow";

import Typography from "@mui/material/Typography";
import { NavigationHeader } from "../../components/NavigationHeader";
import { SmTitleText } from "../../components/SmTitleText";
import { InfoCard } from "../../components/InfoCard";

export const Result = () => {
  const { guests, costs, products } = useAppContext();

  const updatedGuestsCosts = useMemo(() => {
    return Object.values(costs).reduce<Record<string, number>>((acc, cost) => {
      const total = Object.values(cost.products)
        .filter((product) => product.id)
        .reduce((sum, currentValue) => {
          const unitCost = products[currentValue.id]?.price ?? 0;
          return sum + unitCost * currentValue.quantity;
        }, 0);
  
      acc = cost.guests.filter(guestID => guests[guestID]).reduce((acc, guestID) => (
        {...acc, [guestID]: (acc[guestID] ?? 0) + total / cost.guests.length}
      ), acc);
      return acc;
    }, {});
  }, [costs, products, guests]);

  const totalCost = useMemo(
    () => Object.values(updatedGuestsCosts).reduce((sum, currentValue) => sum + currentValue, 0),
    [updatedGuestsCosts]
  );

  return (
    <>
      <NavigationHeader
        previousOption={{
          href: "/costs",
          label: "Voltar para consumos",
        }}
      />
      <SmTitleText title="Resultado" />
      {Object.keys(updatedGuestsCosts).length !== 0 ? (
        <Stack spacing={2}>
          <Card sx={{p: 2}}>
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
        <InfoCard>
          Registre <Link href="./products">produtos</Link>, <Link href="./guests">participantes</Link> e <Link href="./costs">consumos</Link> para saber o resultado da divisão.
        </InfoCard>
      )}
    </>
  );
};
