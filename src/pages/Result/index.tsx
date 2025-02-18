import { useMemo, useState } from "react";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TextField from "@mui/material/TextField";
import Percent from "@mui/icons-material/Percent";

import Table from "@mui/material/Table";
import { GuestCostRow } from "../../components/GuestCostRow";

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
import { TotalCosts } from "./TotalCosts";

export const Result = () => {
  const { guests, costs, products } = useAppContext();
  const [extra, setExtra] = useState<number|undefined>(0);

  const updatedGuestsCosts = useMemo(
    () => calculateGuestCosts(costs, products, guests, extra),
    [costs, products, guests, extra]
  );

  const totalCost = useMemo(
    () => calculateTotalCost(updatedGuestsCosts),
    [updatedGuestsCosts]
  );

  const handleShare = () => {
    const shareText = generateShareText(updatedGuestsCosts, guests);
    shareResults(shareText);
  };

  const handleExtraChange = (value?: string) => {
    if (!value) return setExtra(undefined);
    const newValue = parseFloat(value);
    setExtra(newValue >= 0 ? newValue : 0);
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
          <Stack direction="row" alignItems="center" spacing={1}>
            <Percent color="secondary" />
            <TextField
              label="Adicional do garçom"
              type="number"
              sx={{ width: "100%" }}
              value={extra}
              onChange={(event) => handleExtraChange(event.target.value)}
              required
            />
          </Stack>
          <Card sx={{ p: 2 }}>
            <Table>
              <TableBody>
                {Object.entries(updatedGuestsCosts).map(([guestID, cost]) => (
                  <GuestCostRow
                    key={guestID}
                    guestName={guests[guestID].name}
                    cost={cost}
                    extra={extra}
                  />
                ))}
              </TableBody>
            </Table>
          </Card>
          <TotalCosts hasExtra={!!extra} total={totalCost} extra={extra} />
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
