import { CostItem } from "./CostItem";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { NavigationHeader } from "../../components/NavigationHeader";
import { SmTitleText } from "../../components/SmTitleText";
import { InfoCard } from "../../components/InfoCard";

import { useRef } from "react";
import {
  CLEAR_ALL_CONFIRM_MESSAGE,
  CLEAR_ALL_COSTS_TEXT,
  NEXT_OPTION_LABEL,
  INFO_COST_MESSAGE,
} from "./constants";

export const Costs = () => {
  const { costs, guests, products, addCost, refreshCosts, updateCosts } =
    useAppContext();

  const hasCalledRefresh = useRef(false);

  if (!hasCalledRefresh.current) {
    refreshCosts();
    hasCalledRefresh.current = true;
  }

  const clearAllCosts = () =>
    confirm(CLEAR_ALL_CONFIRM_MESSAGE) && updateCosts(() => ({}));

  const isClearable = Object.keys(costs).length !== 0;

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/products" }}
        nextOption={{ label: NEXT_OPTION_LABEL, href: "/result" }}
      />
      <SmTitleText title="Consumos" />
      <Stack spacing={2}>
        {Object.values(costs).map((cost) => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        {Object.values(guests).length === 0 &&
        Object.values(products).length === 0 ? (
          <InfoCard>{INFO_COST_MESSAGE.noProducts}</InfoCard>
        ) : (
          <>
            {Object.values(costs).length === 0 && (
              <InfoCard>{INFO_COST_MESSAGE.empty}</InfoCard>
            )}
            <Button variant="outlined" onClick={addCost}>
              <Add fontSize="large" />
            </Button>
            <Button
              startIcon={<Delete />}
              disabled={!isClearable}
              variant="contained"
              color="error"
              onClick={clearAllCosts}
            >
              {CLEAR_ALL_COSTS_TEXT}
            </Button>
          </>
        )}
      </Stack>
    </>
  );
};
