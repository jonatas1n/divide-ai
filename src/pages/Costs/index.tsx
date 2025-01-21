import { CostItem } from "../../components/costs/CostItem";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import { NavigationHeader } from "../../components/NavigationHeader";

export const Costs = () => {
  const { costs, addCost, refreshCosts } = useAppContext();

  refreshCosts();

  if (Object.keys(costs).length === 0) addCost();

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
      </Stack>
    </>
  );
};
