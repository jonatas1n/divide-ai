import { useAppContext } from "../../../hooks/Context";
import { SelectField, OptionProps } from "../SelectField";
import { CostType } from "../../../types";
import { CostProductCount } from "../CostProductCount";

import Stack from "@mui/material/Stack";

type CostFormProps = {
  cost: CostType;
};

export const CostForm = ({ cost }: CostFormProps) => {
  const { guests, changeCost, products } = useAppContext();

  const guestValues = cost.guests.map((guestID) => ({
    value: guestID,
    label: guests[guestID]?.name,
  }));

  const guestOptions = Object.values(guests)
    .filter((guest) => guest.name)
    .map((guest) => ({
      value: guest.id,
      label: guest.name,
    }));

  const onChangeGuests = (selectedOptions: OptionProps[]) => {
    const isAllSelected = selectedOptions.some(
      (option) => option.value === "all"
    );

    const updatedGuests = isAllSelected
      ? guestValues.length === guestOptions.length
        ? []
        : guestOptions.map((option) => option.value)
      : selectedOptions.map((option) => option.value);

    changeCost({ ...cost, guests: updatedGuests });
  };

  const productValues = Object.keys(cost.products).map((productID) => ({
    value: productID,
    label: products[productID].name,
  }));

  const productsOptions = Object.values(products)
    .filter((product) => product.name)
    .map(({ id, name }) => ({
      value: id,
      label: name,
    }));

  const onChangeProducts = (selectedOptions: OptionProps[]) => {
    const isAllSelected = selectedOptions.some(
      (option) => option.value === "all"
    );

    const updatedProducts = isAllSelected
      ? productValues.length === productsOptions.length
        ? {}
        : Object.fromEntries(
            productsOptions.map(({ value }) => [
              value,
              { id: value, quantity: 1 },
            ])
          )
      : Object.fromEntries(
          selectedOptions.map(({ value }) =>
            cost.products[value]
              ? [value, cost.products[value]]
              : [value, { id: value, quantity: 1 }]
          )
        );

    changeCost({ ...cost, products: updatedProducts });
  };

  return (
    <Stack spacing={2} width="100%">
      <SelectField
        label="Participantes"
        options={guestOptions}
        value={guestValues}
        onChange={onChangeGuests}
      />
      <SelectField
        label="Produtos"
        options={productsOptions}
        value={productValues}
        onChange={onChangeProducts}
      />
      <CostProductCount cost={cost} />
    </Stack>
  );
};
