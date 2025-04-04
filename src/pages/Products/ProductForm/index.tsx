import { ProductType } from "../../../types";
import { useState, useCallback } from "react";
import { useAppContext } from "../../../hooks/Context";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
  formatMoneyString,
  moneyNumberToString,
} from "../../../utils/formatter";

type ProductFormProps = {
  product: ProductType;
};

export const ProductForm = ({ product }: ProductFormProps) => {
  const [productData, setProductData] = useState<ProductType>(product);
  const { changeProduct } = useAppContext();

  const handleChange = useCallback(
    (field: keyof ProductType) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: rawValue } = event.target;

        let value: string | number | undefined = rawValue;
        if (field === "price") {
          value = parseFloat(formatMoneyString(rawValue) ?? "0");
        } else {
          value = rawValue.charAt(0).toUpperCase() + rawValue.slice(1);
        }

        const updatedProduct = { ...productData, [field]: value };
        setProductData(updatedProduct);
        changeProduct(updatedProduct);
      },
    [productData, changeProduct]
  );

  return (
    <Stack direction="row" spacing={1} width="100%">
      <TextField
        label="Produto"
        value={productData.name}
        onChange={handleChange("name")}
        sx={{ width: "100%" }}
        required
      />
      <TextField
        variant="outlined"
        label="Preço"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        value={moneyNumberToString(productData.price)}
        onChange={handleChange("price")}
        required
      />
    </Stack>
  );
};
