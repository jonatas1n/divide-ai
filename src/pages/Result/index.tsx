import { useMemo, useState } from "react";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Add from "@mui/icons-material/Add";
import Percent from "@mui/icons-material/Percent";


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
  const [extraValue, setExtraValue] = useState<number>(0);

  const updatedGuestsCosts = useMemo(
    () => calculateGuestCosts(costs, products, guests, extraValue),
    [costs, products, guests, extraValue]
  );

  const totalCost = useMemo(
    () => calculateTotalCost(updatedGuestsCosts),
    [updatedGuestsCosts]
  );

  const handleShare = () => {
    const shareText = generateShareText(updatedGuestsCosts, guests);
    shareResults(shareText);
  };

  const handleExtraValueChange = (value?: string) => {
    if (!value) return setExtraValue(0);
    const newValue = parseFloat(value);
    setExtraValue(newValue ? newValue : 0);
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
          {extraValue ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Percent color="secondary"/>
              <TextField
                label="Adicional do garçom"
                type="number"
                sx={{ width: "100%" }}
                value={extraValue}
                onChange={(event) => handleExtraValueChange(event.target.value)}
                required
              />
            </Stack>
          ) : (
            <Button variant="contained" onClick={() => setExtraValue(10)}>
              <Add /> Adicional do garçom
            </Button>
          )}
          <Card sx={{ p: 2 }}>
            <Table>
              <TableBody>
                {Object.entries(updatedGuestsCosts).map(([guestID, cost]) => (
                  <GuestCostRow
                    key={guestID}
                    guestName={guests[guestID].name}
                    cost={cost}
                    extraValue={extraValue}
                  />
                ))}
              </TableBody>
            </Table>
          </Card>
          {extraValue ? <Typography pr={2} variant="subtitle1" fontStyle="italic" align="right">+{extraValue}% de adicional do garçom</Typography> : null}
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
