import { ProductItem } from "./ProductItem";
import { useAppContext } from "../../hooks/Context";
import { ProductType } from "../../types";

import { NavigationHeader } from "../../components/NavigationHeader";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import { InfoCard } from "../../components/InfoCard";
import { SmTitleText } from "../../components/SmTitleText";

export const Products = () => {
  const { products, addProduct, updateProducts } = useAppContext();

  const clearAllProducts = () => {
    if (confirm("Deseja realmente apagar todos os produtos?")) {
      updateProducts(() => ({}));
    }
  };

  const isClearable = Object.values(products).length > 0;

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/guests" }}
        nextOption={{
          href: "/costs",
          label: "Avançar para os consumos",
        }}
      />
      <SmTitleText title="Produtos" />
      <Stack spacing={2}>
        {Object.values(products).map((product: ProductType) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {Object.values(products).length === 0 && (
          <InfoCard>
            Adicione os produtos consumidos e seus valores. Depois, é só seguir
            para dividir entre os participantes.
          </InfoCard>
        )}
        <Button variant="outlined" onClick={addProduct}>
          <Add fontSize="large" />
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={clearAllProducts}
          startIcon={<Delete />}
          disabled={!isClearable}
        >
          Limpar todos os produtos
        </Button>
      </Stack>
    </>
  );
};
