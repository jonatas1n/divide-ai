import { Container } from "../../components/Container";
import { ProductItem } from "../../components/products/ProductItem";
import { useAppContext } from "../../hooks/Context"
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { ProductType } from "../../types";

export const Products = () => {
  const {products, addProduct} = useAppContext();

  if (Object.keys(products).length === 0) addProduct();

  return (
    <Container>
      <Header title="Produtos" />
      <Content>
        {Object.values(products).map((product: ProductType) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </Content>
      <button onClick={() => addProduct()}>Add +</button>
    </Container>
  )
}
