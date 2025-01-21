import { Container } from "../../components/Container";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "../../components/guests/GuestItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Add from "@mui/icons-material/Add";
import ChevronRight from "@mui/icons-material/ChevronRight";

export const Guests = () => {
  const { guests, addGuest } = useAppContext();

  if (Object.keys(guests).length === 0) addGuest();

  return (
    <Container>
      <Stack alignItems="flex-end">
        <Button variant="text" href="/conta-bar/products" sx={{ mb: 2 }}>
          Avançar para os produtos <ChevronRight fontSize="small" />
        </Button>
      </Stack>
      <Stack spacing={2}>
        {Object.values(guests).map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
        <Button variant="contained" onClick={addGuest}>
          <Add />
        </Button>
      </Stack>
    </Container>
  );
};
