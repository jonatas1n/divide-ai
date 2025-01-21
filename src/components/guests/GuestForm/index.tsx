import { useState } from "react";
import { GuestType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";

import TextField from "@mui/material/TextField";

type GuestFormProps = {
  guest: GuestType;
};

export const GuestForm = ({ guest }: GuestFormProps) => {
  const [formData, setFormData] = useState<GuestType>(guest);
  const { changeGuest } = useAppContext();

  const handleChange =
    (field: keyof GuestType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const updatedProduct = { ...formData, [field]: value };
      setFormData(updatedProduct);
      changeGuest(updatedProduct);
    };

  return (
    <TextField
      sx={{ width: "100%" }}
      label="Nome"
      value={formData.name}
      onChange={handleChange("name")}
      required
    />
  );
};
