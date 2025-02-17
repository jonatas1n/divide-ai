import { useAppContext } from "../../../hooks/Context";
import { CostType } from "../../../types";
import { CostProductCountItem } from "./CostProductCountItem";

import Grid from "@mui/material/Grid2";

type CostProductCountProps = {
  cost: CostType;
};

export const CostProductCount = ({ cost }: CostProductCountProps) => {
  const { products, changeCost } = useAppContext();

  const onChangeQuantity = (quantity: number, id: string) => {
    if (quantity === 0) {
      const updatedProducts = cost.products;
      delete updatedProducts[id];
      changeCost({ ...cost, products: updatedProducts });
    }
    const newProduct = { id, quantity };
    changeCost({
      ...cost,
      products: { ...cost.products, [id]: newProduct },
    });
  };

  if (!cost) return <></>;

  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(7rem, 1fr))",
      }}
    >
      {Object.values(cost.products).map((product) => (
        <CostProductCountItem
          key={product.id}
          name={products[product.id]?.name ?? ""}
          quantity={product.quantity}
          onChangeQuantity={(quantity) =>
            onChangeQuantity(quantity, product.id)
          }
        />
      ))}
    </Grid>
  );
};
