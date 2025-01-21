import { CostType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";
import { CostForm } from "../CostForm";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Delete } from "@mui/icons-material";

type CostItemProps = {
  cost: CostType;
}

export const CostItem = ({ cost }: CostItemProps) => {
  const { removeCost } = useAppContext();
  const onRemove = () => removeCost(cost.id);

  return (
    <Card>
      <Stack p={2} justifyContent="space-between" alignItems="start" spacing={1}>
        <CostForm cost={cost} />
        <Divider orientation="horizontal" flexItem />
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <Typography color="textDisabled" variant="caption">ID: {cost.id}</Typography>
          <Button variant="text" color="error" onClick={onRemove}><Delete /></Button>
        </Stack>    
      </Stack>
    </Card>
  )
}