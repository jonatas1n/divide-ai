import { CostItem } from "./CostItem";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { NavigationHeader } from "../../components/NavigationHeader";
import { InfoCard } from "../../components/InfoCard";

export const Costs = () => {
  const { costs, addCost, refreshCosts, updateCosts } = useAppContext();

  refreshCosts();

  const clearAllCosts = () => {
    if (confirm("Deseja realmente apagar todos os custos?")) {
      updateCosts(() => ({}));
    }
  };

  const isClearAllCostsDisabled = Object.keys(costs).length === 0;

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/divide-ai/products" }}
        nextOption={{ label: "Ver resultados", href: "/divide-ai/result" }}
      />
      <Stack spacing={2}>
        {Object.values(costs).map((cost) => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        {Object.values(costs).length === 0 && (
          <InfoCard>
            Marque aqui quais comidas ou bebidas foram
            consumidas por cada pessoa. O resultado da divisão será calculada na página
            de resultados.
          </InfoCard>
        )}
        <Button variant="outlined" onClick={addCost}>
          <Add fontSize="large"/>
        </Button>
        <Button
          disabled={isClearAllCostsDisabled}
          variant="contained"
          color="error"
          onClick={clearAllCosts}
        >
          <Delete /> Limpar todos os custos
        </Button>
      </Stack>
    </>
  );
};
