import { ProductType } from "../../../types";
import { useState } from "react";
import { useAppContext } from "../../../hooks/Context";
import { FormStyle } from "../../FormStyle";

type ProductFormProps = {
  product: ProductType;
};

export const ProductForm = ({ product }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductType>(product);
  const { changeProduct } = useAppContext();

  const handleChange = (field: keyof ProductType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = field === "price" ? parseFloat(event.target.value) || 0 : event.target.value;
    const updatedProduct = { ...formData, [field]: value };
    setFormData(updatedProduct);
    changeProduct(updatedProduct);
  };

  return (
    <FormStyle>
      <label>
        Nome do produto:
        <input
          value={formData.name}
          onChange={handleChange("name")}
          required
        />
      </label>
      <label>
        Preço:
        <input
          type="number"
          value={formData.price}
          onChange={handleChange("price")}
          required
        />
      </label>
    </FormStyle>
  );
};
