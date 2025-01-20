import { Container } from "../../components/Container";
import { ProductItem } from "../../components/products/ProductItem";
import { useAppContext } from "../../hooks/Context"
import { Header } from "../../components/Header";
import { ProductType } from "../../types";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

export const Products = () => {
  const {products, addProduct} = useAppContext();

  if (Object.keys(products).length === 0) addProduct();

  return (
    <Container>
      <Header title="Produtos" />
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
