import { useAppContext } from "../../../hooks/Context";
import { CostType } from "../../../types";
import { CostProductCountItem } from "./CostProductCountItem";

import Stack from "@mui/material/Stack";

type CostProductCountProps = {
  cost: CostType;
};

export const CostProductCount = ({ cost }: CostProductCountProps) => {
  const { products, changeCost } = useAppContext();

  const onChangeQuantity = (quantity: number, productID: string) => {
    if (quantity === 0) {
      const updatedProducts = cost.products;
      delete updatedProducts[productID];
      changeCost({ ...cost, products: updatedProducts });
    }
    const newProduct = { productID, quantity };
    changeCost({
      ...cost,
      products: { ...cost.products, [productID]: newProduct },
    });
  };

  if (!cost) return <></>;

  return (
    <Stack direction="row" spacing={1}>
      {Object.values(cost.products).map((product) => (
        <CostProductCountItem
          key={product.productID}
          name={products[product.productID].name ?? ""}
          quantity={product.quantity}
          onChangeQuantity={(quantity) =>
            onChangeQuantity(quantity, product.productID)
          }
        />
      ))}
    </Stack>
  );
};
