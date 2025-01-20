import { Container } from "../../components/common/Container";
import { Content } from "../../components/common/Content";
import { Header } from "../../components/common/Header";
import { CostItem } from "../../components/costs/CostItem";
import { useAppContext } from "../../hooks/Context";

export const Costs = () => {
  const { costs, addCost } = useAppContext();

  return (
    <Container>
      <Header>
        <a href="/guests">Ir participantes</a>
        <a href="/products">Ir para produtos</a>
        <h1>Gastos</h1>
        <a href="/result">Ver resultado</a>
      </Header>
      <Content>
        {Object.values(costs).map(cost => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        <button onClick={addCost}>Add+</button>
      </Content>
    </Container>
  )
}