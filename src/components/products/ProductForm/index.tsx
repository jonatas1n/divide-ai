import { ProductType } from "../../../types";
import { useState, useCallback } from "react";
import { useAppContext } from "../../../hooks/Context";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
  moneyStringToNumber,
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
        const rawValue = event.target.value;

        let value: string | number | undefined = rawValue;
        if (field === "price") {
          value = moneyStringToNumber(formatMoneyString(rawValue));
        }

        const updatedProduct = { ...productData, [field]: value };
        setProductData(updatedProduct);
        changeProduct(updatedProduct);
      },
    [productData, changeProduct]
  );

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        label="Produto"
        value={productData.name}
        onChange={handleChange("name")}
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
