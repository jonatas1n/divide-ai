import { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Add from "@mui/icons-material/Add";

const GUEST_PLACEHOLDER = "Nome do participante";

type AddGuestFieldProps = {
  onAddGuest: VoidFunction;
  onChangeInput: Dispatch<SetStateAction<string>>;
  inputValue: string;
};

export const AddGuestField = ({
  onAddGuest,
  onChangeInput,
  inputValue,
}: AddGuestFieldProps) => {
  return (
    <Stack spacing={1} alignItems="center" direction="row">
      <TextField
        placeholder={GUEST_PLACEHOLDER}
        value={inputValue}
        onSubmit={onAddGuest}
        onChange={(event) => onChangeInput(event.target.value)}
        sx={{ width: "100%" }}
      />
      <Button onClick={onAddGuest}>
        <Add fontSize="large" />
      </Button>
    </Stack>
  );
};
