import { CostType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";
import { CostForm } from "../CostForm";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Recycling } from "@mui/icons-material";

type CostItemProps = {
  cost: CostType;
}

export const CostItem = ({ cost }: CostItemProps) => {
  const { removeCost } = useAppContext();
  const onRemove = () => removeCost(cost.id);

  return (
    <Card>
      <Stack p={2} direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <CostForm cost={cost} />
        <Button variant="contained" color="error" onClick={onRemove}><Recycling /></Button>
      </Stack>
    </Card>
  )
}