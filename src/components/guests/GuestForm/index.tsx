import { useState } from "react";
import { GuestType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

type GuestFormProps = {
  guest: GuestType;
}

export const GuestForm = ({ guest }: GuestFormProps) => {
  const [formData, setFormData] = useState<GuestType>(guest);
  const { changeGuest } = useAppContext();

  const handleChange = (field: keyof GuestType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedProduct = { ...formData, [field]: value };
    setFormData(updatedProduct);
    changeGuest(updatedProduct);
  };

  return (
    <Stack>
      <Stack direction="row">
        Nome:
        <TextField
          value={formData.name}
          onChange={handleChange("name")}
          required
        />
      </Stack>
    </Stack>
  );
};