import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { CostItem } from "../../components/costs/CostItem";
import { useAppContext } from "../../hooks/Context";

export const Costs = () => {
  const { costs, addCost } = useAppContext();

  if (Object.keys(costs).length === 0) addCost();

  return (
    <Container>
      <Header title="Gastos"/>
      <Content>
        {Object.values(costs).map(cost => (
          <CostItem key={cost.id} cost={cost} />
        ))}
        <button onClick={addCost}>Add+</button>
      </Content>
    </Container>
  )
}