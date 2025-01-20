import { Container } from "../../components/common/Container"
import { Header } from "../../components/common/Header"
import { Content } from "../../components/common/Content"

export const Result = () => {
  return (
    <Container>
      <Header>
        <a href="/guests">Ir participantes</a>
        <a href="/products">Ir para produtos</a>
        <a href="/costs">Ir para gastos</a>
        <h1>Resultado</h1>
      </Header>
      <Content>
        Resultado
      </Content>
    </Container>
  )
}