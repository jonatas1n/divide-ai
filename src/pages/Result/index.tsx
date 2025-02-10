import { useMemo } from "react";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";

import Table from "@mui/material/Table";
import { GuestCostRow } from "../../components/GuestCostRow";

import Typography from "@mui/material/Typography";
import { NavigationHeader } from "../../components/NavigationHeader";
import { SmTitleText } from "../../components/SmTitleText";
import { InfoCard } from "../../components/InfoCard";
import ShareIcon from "@mui/icons-material/Share";

import {
  calculateGuestCosts,
  calculateTotalCost,
  generateShareText,
  shareResults,
} from "./utils";

export const Result = () => {
  const { guests, costs, products } = useAppContext();

  const updatedGuestsCosts = useMemo(
    () => calculateGuestCosts(costs, products, guests),
    [costs, products, guests]
  );

  const totalCost = useMemo(
    () => calculateTotalCost(updatedGuestsCosts),
    [updatedGuestsCosts]
  );

  const handleShare = () => {
    const shareText = generateShareText(updatedGuestsCosts, guests);
    shareResults(shareText);
  };

  return (
    <>
      <NavigationHeader
        previousOption={{
          href: "/costs",
          label: "Voltar para consumos",
        }}
        nextOption={{
          label: (
            <IconButton onClick={handleShare}>
              <ShareIcon color="primary" />
            </IconButton>
          ),
        }}
      />
      <SmTitleText title="Resultado" />
      {Object.keys(updatedGuestsCosts).length ? (
        <Stack spacing={2}>
          <Card sx={{ p: 2 }}>
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
            Total: R$ {totalCost.toFixed(2)}
          </Typography>
        </Stack>
      ) : (
        <InfoCard>
          Registre <Link href="/products">produtos</Link>,{" "}
          <Link href="/guests">participantes</Link> e{" "}
          <Link href="/costs">consumos</Link> para saber o resultado da divisão.
        </InfoCard>
      )}
    </>
  );
};
