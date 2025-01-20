import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "../../components/guests/GuestItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

export const Guests = () => {
  const { guests, addGuest } = useAppContext();

  if (Object.keys(guests).length === 0) addGuest();

  return (
    <Container>
      <Header title="Participantes" />
      <Stack spacing={2}>
        {Object.values(guests).map(guest => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
        <Button variant="contained" onClick={addGuest}>
          <Add />
        </Button>
      </Stack>
    </Container>
  )
}