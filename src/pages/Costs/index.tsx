import { CostItem } from "../../components/costs/CostItem";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { NavigationHeader } from "../../components/NavigationHeader";

export const Costs = () => {
  const { costs, addCost, refreshCosts, updateCosts } = useAppContext();

  refreshCosts();
  
  const clearAllCosts = () => {
    if (confirm("Deseja realmente apagar todos os custos?")) {
      updateCosts(() => ({}));
    }
  };

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/conta-bar/products" }}
        nextOption={{ label: "Ver resultados", href: "/conta-bar/result" }}
      />
      <Stack spacing={2}>
        {Object.values(costs).map((cost) => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        <Button variant="outlined" onClick={addCost}>
          <Add />
        </Button>
        <Button variant="contained" color="error" onClick={clearAllCosts}>
          <Delete /> Limpar todos os custos
        </Button>
      </Stack>
    </>
  );
};
