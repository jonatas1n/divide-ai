import { Container } from "../../components/common/Container";
import { ProductItem } from "../../components/products/ProductItem";
import { useAppContext } from "../../hooks/Context"
import { Header } from "../../components/common/Header";
import { Content } from "../../components/common/Content";
import { ProductType } from "../../types";

export const Products = () => {
  const {products, addProduct} = useAppContext();

  if (Object.keys(products).length === 0) addProduct();

  return (
    <Container>
      <Header>
        <a href="/guests">Ir para participantes</a>
        <h1>Produtos</h1>
        <a href="/costs">Ir para gastos</a>
        <a href="/result">Ver resultado</a>
      </Header>
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
