import { useAppContext } from "../../../hooks/Context";
import { GuestForm } from "../GuestForm";
import { GuestType } from "../../../types";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Delete } from "@mui/icons-material";

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
        <Button variant="contained" onClick={onRemove} color="error"><Delete /></Button>
      </Stack>
    </Card>
  )
}