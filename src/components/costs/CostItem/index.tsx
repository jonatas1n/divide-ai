import { CostType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";
import { CostForm } from "../CostForm";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import Delete from "@mui/icons-material/Delete";

type CostItemProps = {
  cost: CostType;
}

export const CostItem = ({ cost }: CostItemProps) => {
  const { removeCost, products } = useAppContext();
  const onRemove = () => removeCost(cost.id);

  const total = Object.values(cost.products).reduce((acc, product) => {
    const unitCost = products[product.productID]?.price ?? 0;
    return acc + unitCost * product.quantity;
  }, 0);
  const totalPerGuest = total/cost.guests.length || 0;

  return (
    <Card>
      <Stack p={2} justifyContent="space-between" alignItems="start" spacing={1}>
        <CostForm cost={cost} />
        <Divider orientation="horizontal" flexItem />
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Stack>
            <Typography variant="caption">Total: $ {total.toFixed(2)}</Typography>
            <Typography variant="caption">Por pessoa: $ {totalPerGuest.toFixed(2)}</Typography>
          </Stack>
          <Button variant="text" color="error" onClick={onRemove}><Delete /></Button>
        </Stack>    
      </Stack>
    </Card>
  )
}