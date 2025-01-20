import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

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
      <Stack direction="row" spacing={1} justifyContent="center">
        <Button onClick={() => onChangeQuantity(quantity - 1)}>
          <Typography variant="h4">-</Typography>
        </Button>
        <Stack alignItems="stretch" textAlign="center" justifyContent="center">
          <Typography variant="body1" textTransform="capitalize">
            {name}
          </Typography>
          <Typography variant="h5">{quantity}</Typography>
        </Stack>
        <Button onClick={() => onChangeQuantity(quantity + 1)}>
          <Typography variant="h4">+</Typography>
        </Button>
      </Stack>
    </Card>
  );
};
