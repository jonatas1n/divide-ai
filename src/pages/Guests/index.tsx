import { useState } from "react";
import { useAppContext } from "../../hooks/Context";
import { GuestItem } from "./GuestItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Delete from "@mui/icons-material/Delete";
import { NavigationHeader } from "../../components/NavigationHeader";
import { SmTitleText } from "../../components/SmTitleText";
import { AddItemField } from "../../components/AddItemField";
import { InfoCard } from "../../components/InfoCard";
import {
  CLEAR_ALL_CONFIRM_MESSAGE,
  NEXT_OPTION_LABEL,
  GUEST_PLACEHOLDER,
  CLEAR_ALL_GUESTS_TEXT,
  INFO_GUEST_MESSAGE,
} from "./constants";

export const Guests = () => {
  const { guests, addGuest, updateGuests } = useAppContext();
  const [guestInput, setGuestInput] = useState("");

  const clearAllGuests = () =>
    confirm(CLEAR_ALL_CONFIRM_MESSAGE) && updateGuests(() => ({}));

  const handleAddGuest = () => {
    if (!guestInput) return;
    addGuest(guestInput);
    setGuestInput("");
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
        {Object.values(guests).length === 0 && (
          <InfoCard>{INFO_GUEST_MESSAGE}</InfoCard>
        )}
        <Button
          startIcon={<Delete />}
          disabled={!isClearable}
          variant="contained"
          color="error"
          onClick={clearAllGuests}
        >
          {CLEAR_ALL_GUESTS_TEXT}
        </Button>
        <AddItemField
          onAddItem={handleAddGuest}
          inputValue={guestInput}
          onChangeInput={setGuestInput}
          placeholder={GUEST_PLACEHOLDER}
        />
      </Stack>
    </>
  );
};
