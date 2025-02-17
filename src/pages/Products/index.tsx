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

const PRODUCT_PLACEHOLDER = "Nome do produto";
const INFO_PRODUCTS_MESSAGE =
  "Adicione os produtos consumidos e seus valores. Depois, é só seguir para dividir entre os participantes.";

export const Products = () => {
  const { products, addProduct, updateProducts } = useAppContext();
  const [productInput, setProductInput] = useState("");

  const clearAllProducts = () => {
    if (confirm("Deseja realmente apagar todos os produtos?")) {
      updateProducts(() => ({}));
    }
  };

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
          Limpar todos os produtos
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
