import { Container } from "../../components/common/Container";
import { Header } from "../../components/common/Header";
import { Content } from "../../components/common/Content";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "../../components/guests/GuestItem";

export const Guests = () => {
  const { guests, addGuest } = useAppContext();

  if (Object.keys(guests).length === 0) addGuest();

  return (
    <Container>
      <Header>
        <h1>Participantes</h1>
        <a href="/products">Avançar para produtos</a>
        <a href="/costs">Avançar para gastos</a>
        <a href="/result">Ver resultado</a>
      </Header>
      <Content>
        {Object.values(guests).map(guest => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </Content>
      <button onClick={() => addGuest()}>Add +</button>
    </Container>
  )
}