import { useAppContext } from "../../../hooks/Context";
import { GuestForm } from "../GuestForm";
import { GuestType } from "../../../types";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import Delete from "@mui/icons-material/Delete";
import { Slide } from "@mui/material";

type GuestItemProps = {
  guest: GuestType;
}

export const GuestItem = ({ guest }: GuestItemProps) => {
  const { removeGuest } = useAppContext();
  const onRemove = () => removeGuest(guest.id);

  return (
    <Slide in direction="left">
      <Card>
        <Stack direction="row" spacing={1} justifyContent="space-between" p={2} alignItems="center">
          <GuestForm guest={guest} />
          <IconButton size="small" sx={{p: 0}} onClick={onRemove} color="error"><Delete /></IconButton>
        </Stack>
      </Card>
    </Slide>
  )
}