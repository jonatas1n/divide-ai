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

export const Costs = () => {
  const { costs, guests, products, addCost, refreshCosts, updateCosts } =
    useAppContext();

  const hasCalledRefresh = useRef(false);

  if (!hasCalledRefresh.current) {
    refreshCosts();
    hasCalledRefresh.current = true;
  }

  const clearAllCosts = () => {
    if (confirm("Deseja realmente apagar todos os custos?")) {
      updateCosts(() => ({}));
    }
  };

  const isClearable = Object.keys(costs).length !== 0;

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/products" }}
        nextOption={{ label: "Ver resultado", href: "/result" }}
      />
      <SmTitleText title="Consumos" />
      <Stack spacing={2}>
        {Object.values(costs).map((cost) => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        {Object.values(guests).length === 0 &&
        Object.values(products).length === 0 ? (
          <InfoCard>
            Você ainda não adicionou participantes e produtos. Adicione-os
            para gerar os custos.
          </InfoCard>
        ) : (
          <>
            {Object.values(costs).length === 0 && (
              <InfoCard>
                Marque aqui quais comidas ou bebidas foram consumidas por cada
                pessoa. O resultado da divisão será calculada na página de
                resultados.
              </InfoCard>
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
              Limpar todos os custos
            </Button>
          </>
        )}
      </Stack>
    </>
  );
};
