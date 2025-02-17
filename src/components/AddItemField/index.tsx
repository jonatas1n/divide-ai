import { Dispatch, SetStateAction } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Add from "@mui/icons-material/Add";

type AddItemFieldProps = {
  onAddItem: VoidFunction;
  onChangeInput: Dispatch<SetStateAction<string>>;
  inputValue: string;
  placeholder?: string;
};

export const AddItemField = ({
  onAddItem,
  onChangeInput,
  inputValue,
  placeholder,
}: AddItemFieldProps) => {
  return (
    <Stack spacing={1} alignItems="center" direction="row">
      <TextField
        placeholder={placeholder}
        value={inputValue}
        onSubmit={onAddItem}
        onChange={(event) => onChangeInput(event.target.value)}
        sx={{ width: "100%" }}
      />
      <Button onClick={onAddItem}>
        <Add fontSize="large" />
      </Button>
    </Stack>
  );
};
