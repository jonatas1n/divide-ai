import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

type CostProductCountItemProps = {
  name: string;
  quantity: number;
  onChangeQuantity: (quantity: number) => void;
};

export const CostProductCountItem = ({
  name,
  quantity,
  onChangeQuantity,
}: CostProductCountItemProps) => {
  return (
    <Card>
      <Stack alignItems="center">
        <Typography variant="body1" textTransform="capitalize">
          {name}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" textAlign="center">
          <IconButton onClick={() => onChangeQuantity(quantity - 1)}>
            <Remove />
          </IconButton>
          <Typography variant="h5" textAlign="center">{quantity}</Typography>
          <IconButton onClick={() => onChangeQuantity(quantity + 1)}>
            <Add />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};
