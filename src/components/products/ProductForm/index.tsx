import { ProductType } from "../../../types";
import { useState } from "react";
import { useAppContext } from "../../../hooks/Context";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

type ProductFormProps = {
  product: ProductType;
};

export const ProductForm = ({ product }: ProductFormProps) => {
  const [productData, setProductData] = useState<ProductType>(product);
  const { changeProduct } = useAppContext();

  const handleChange =
    (field: keyof ProductType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "price"
          ? parseFloat(event.target.value) || 0
          : event.target.value;
      const updatedProduct = { ...productData, [field]: value };
      setProductData(updatedProduct);
      changeProduct(updatedProduct);
    };

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        label="Nome do produto"
        value={productData.name}
        onChange={handleChange("name")}
        required
      />
      <TextField
        label="Preço"
        type="number"
        value={productData.price}
        onChange={handleChange("price")}
        required
      />
    </Stack>
  );
};
