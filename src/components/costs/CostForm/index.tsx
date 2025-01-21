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
    .filter(guest => guest.name)
    .map((guest) => ({
      value: guest.id,
      label: guest.name,
    }));

  const onChangeGuests = (selectedOptions: OptionProps[]) => {
    const guestIdList = selectedOptions.map((option) => option.value);
    changeCost({ ...cost, guests: guestIdList });
  };

  const productValues = Object.keys(cost.products).map((productID) => ({
    value: productID,
    label: products[productID].name,
  }));

  const productsOptions = Object.values(products)
    .filter(product => product.name)
    .map(({ id, name }) => ({
      value: id,
      label: name,
    }));

  const onChangeProducts = (selectedOptions: OptionProps[]) => {
    const productsUpdated = selectedOptions.map(({ value }) => {
      if (Object.keys(cost.products).includes(value)) {
        return [value, cost.products[value]];
      }
      return [value, { id: value, quantity: 1 }];
    });
    changeCost({ ...cost, products: Object.fromEntries(productsUpdated) });
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
