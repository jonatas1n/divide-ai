import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { useAppContext } from "../../hooks/Context";
import { ProductType } from "../../types";

import { NavigationHeader } from "../../components/NavigationHeader";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Delete from "@mui/icons-material/Delete";
import { InfoCard } from "../../components/InfoCard";
import { SmTitleText } from "../../components/SmTitleText";
import { AddItemField } from "../../components/AddItemField";
import {
  PRODUCT_PLACEHOLDER,
  CLEAR_ALL_GUESTS_TEXT,
  CLEAR_ALL_CONFIRM_MESSAGE,
  INFO_PRODUCTS_MESSAGE,
} from "./constants";

export const Products = () => {
  const { products, addProduct, updateProducts } = useAppContext();
  const [productInput, setProductInput] = useState("");

  const clearAllProducts = () =>
    confirm(CLEAR_ALL_CONFIRM_MESSAGE) && updateProducts(() => ({}));

  const handleAddProduct = () => {
    if (!productInput) return;
    addProduct(productInput);
    setProductInput("");
  };

  const isClearable = Object.values(products).length > 0;

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/guests" }}
        nextOption={{
          href: "/costs",
          label: "Consumos",
        }}
      />
      <SmTitleText title="Produtos" />
      <Stack spacing={2}>
        {Object.values(products).map((product: ProductType) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {Object.values(products).length === 0 && (
          <InfoCard>{INFO_PRODUCTS_MESSAGE}</InfoCard>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={clearAllProducts}
          startIcon={<Delete />}
          disabled={!isClearable}
        >
          {CLEAR_ALL_GUESTS_TEXT}
        </Button>
        <AddItemField
          onAddItem={handleAddProduct}
          inputValue={productInput}
          onChangeInput={setProductInput}
          placeholder={PRODUCT_PLACEHOLDER}
        />
      </Stack>
    </>
  );
};
