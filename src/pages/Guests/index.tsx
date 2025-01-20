import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "../../components/guests/GuestItem";

export const Guests = () => {
  const { guests, addGuest } = useAppContext();

  if (Object.keys(guests).length === 0) addGuest();

  return (
    <Container>
      <Header title="Participantes" />
      <Content>
        {Object.values(guests).map(guest => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </Content>
      <button onClick={() => addGuest()}>Add +</button>
    </Container>
  )
}