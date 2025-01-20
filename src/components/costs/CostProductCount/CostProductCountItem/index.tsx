import styled from "styled-components";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type CostProductCountItemProps = {
  name: string;
  quantity: number;
  onChangeQuantity: (quantity: number) => void;
};

const CostProductCountItemDisplay = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  grid-column: span 3;
  font-weight: bold;

  h3 {
    align-self: center;
  }
`;

export const CostProductCountItem = ({
  name,
  quantity,
  onChangeQuantity
}: CostProductCountItemProps) => {
  return (
    <Stack direction="row"spacing={1}>
      <Button onClick={() => onChangeQuantity(quantity-1)}>-</Button>
      <Stack alignItems="stretch" textAlign="center" justifyContent="center">
        {name}
        <h3>{quantity}</h3>
      </Stack>
      <Button onClick={() => onChangeQuantity(quantity+1)}>+</Button>
    </Stack>
  );
};
