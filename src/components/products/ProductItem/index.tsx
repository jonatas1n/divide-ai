import { useAppContext } from "../../../hooks/Context";
import { ProductType } from "../../../types";
import { ProductForm } from "../ProductForm";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

import Delete from "@mui/icons-material/Delete";

type ProductItemProps = {
  product: ProductType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const { removeProduct } = useAppContext();
  const onRemove = () => removeProduct(product.id);

  return (
    <Card>
      <Stack direction="row" spacing={1} p={2} justifyContent="space-between" alignItems="center">
        <ProductForm product={product} />
        <IconButton size="small" sx={{p: 0}} onClick={onRemove} color="error"><Delete /></IconButton>
      </Stack>
    </Card>
  )
}
