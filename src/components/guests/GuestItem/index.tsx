import { useAppContext } from "../../../hooks/Context";
import { GuestForm } from "../GuestForm";
import { GuestType } from "../../../types";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Recycling } from "@mui/icons-material";

type GuestItemProps = {
  guest: GuestType;
}

export const GuestItem = ({ guest }: GuestItemProps) => {
  const { removeGuest } = useAppContext();
  const onRemove = () => removeGuest(guest.id);

  return (
    <Card>
      <Stack direction="row" justifyContent="space-between" p={2} alignItems="center">
        <GuestForm guest={guest} />
        <Button onClick={onRemove} color="error"><Recycling /></Button>
      </Stack>
    </Card>
  )
}