import { Container } from "../../components/Container";
import { ProductItem } from "../../components/products/ProductItem";
import { useAppContext } from "../../hooks/Context"
import { ProductType } from "../../types";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import ChevronRight from "@mui/icons-material/ChevronRight";

export const Products = () => {
  const {products, addProduct} = useAppContext();

  if (Object.keys(products).length === 0) addProduct();

  return (
    <Container>
      <Stack alignItems="flex-end">
        <Button variant="text" href="/conta-bar/costs" sx={{ mb: 2 }}>
          Avançar para consumos <ChevronRight fontSize="small" />
        </Button>
      </Stack>
      <Stack spacing={2}>
        {Object.values(products).map((product: ProductType) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
        <Button variant="contained" onClick={addProduct}><Add /></Button>
      </Stack>
    </Container>
  )
}
