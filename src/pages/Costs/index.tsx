import { Container } from "../../components/Container";
import { CostItem } from "../../components/costs/CostItem";
import { useAppContext } from "../../hooks/Context";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

export const Costs = () => {
  const { costs, addCost, refreshCosts } = useAppContext();

  refreshCosts();

  if (Object.keys(costs).length === 0) addCost();

  return (
    <Container title="Consumos">
      <Stack spacing={2}>
        {Object.values(costs).map(cost => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        <Button variant="contained" onClick={addCost}><Add /></Button>
      </Stack>
    </Container>
  )
}