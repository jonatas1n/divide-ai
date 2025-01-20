import { useAppContext } from "../../../hooks/Context";
import { ProductType } from "../../../types";
import { ProductForm } from "../ProductForm";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Recycling } from "@mui/icons-material";

type ProductItemProps = {
  product: ProductType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const { removeProduct } = useAppContext();
  const onRemove = () => removeProduct(product.id);

  return (
    <Card>
      <Stack direction="row" p={2} justifyContent="space-between" alignItems="center">
        <ProductForm product={product} />
        <Button onClick={onRemove} color="error"><Recycling /></Button>
      </Stack>
    </Card>
  )
}
