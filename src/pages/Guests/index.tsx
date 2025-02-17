import { useState } from "react";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "./GuestItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Delete from "@mui/icons-material/Delete";
import { NavigationHeader } from "../../components/NavigationHeader";
import { SmTitleText } from "../../components/SmTitleText";
import { AddGuestField } from "./AddGuestField";

const CLEAR_ALL_GUESTS_TEXT = "Limpar todos os participantes";
const NEXT_OPTION_LABEL = "Avançar para Produtos";

export const Guests = () => {
  const { guests, addGuest, updateGuests } = useAppContext();
  const [guestInput, setGuestInput] = useState("");

  const clearAllGuests = () => updateGuests(() => ({}));

  const moveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleAddGuest = () => {
    if (!guestInput) return;
    addGuest(guestInput);
    setGuestInput("");
    moveToBottom();
  };

  const isClearable =
    Object.values(guests).filter((guest) => guest.name).length > 0;

  return (
    <>
      <NavigationHeader
        nextOption={{
          href: "/products",
          label: NEXT_OPTION_LABEL,
        }}
      />
      <SmTitleText title="Participantes" />
      <Stack spacing={2}>
        {Object.values(guests).map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
        <AddGuestField
          onAddGuest={handleAddGuest}
          inputValue={guestInput}
          onChangeInput={setGuestInput}
        />
        <Button
          startIcon={<Delete />}
          disabled={!isClearable}
          variant="contained"
          color="error"
          onClick={clearAllGuests}
        >
          {CLEAR_ALL_GUESTS_TEXT}
        </Button>
      </Stack>
    </>
  );
};
