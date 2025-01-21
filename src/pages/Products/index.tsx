import { ProductItem } from "../../components/products/ProductItem";
import { useAppContext } from "../../hooks/Context"
import { ProductType } from "../../types";

import { NavigationHeader } from "../../components/NavigationHeader";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";

export const Products = () => {
  const {products, addProduct} = useAppContext();

  if (Object.keys(products).length === 0) addProduct();

  return (
    <>
      <NavigationHeader
        previousOption={{ href: "/conta-bar/guests" }}
        nextOption={{ href: "/conta-bar/costs", label: "Avançar para os consumos" }}
      />
      <Stack spacing={2}>
        {Object.values(products).map((product: ProductType) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
        <Button variant="outlined" onClick={addProduct}><Add /></Button>
      </Stack>
    </>
  )
}
