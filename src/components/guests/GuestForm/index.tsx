import { useState } from "react";
import styled from "styled-components";
import { GuestType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";

type GuestFormProps = {
  guest: GuestType;
}

const FormStyle = styled.form`
  display: flex;
  gap: 1rem;

  label {
    display: flex;
    gap: 0.5rem;
  }
`;

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
    <FormStyle>
      <label>
        Nome:
        <input
          value={formData.name}
          onChange={handleChange("name")}
          required
        />
      </label>
    </FormStyle>
  );
};