import { useAppContext } from "../../../hooks/Context";
import { SelectField, OptionProps } from "../../../components/SelectField";
import { CostType, GuestType, ProductType } from "../../../types";
import { CostProductCount } from "../CostProductCount";

import Stack from "@mui/material/Stack";

type CostFormProps = {
  cost: CostType;
};

const mapToOption = (
  ids: string[],
  objects: Record<string, ProductType | GuestType>
) =>
  ids
    .filter((id) => objects[id] && objects["name"])
    .map((key) => ({
      value: key,
      label: objects[key].name,
    }));

export const CostForm = ({ cost }: CostFormProps) => {
  const { guests, changeCost, products } = useAppContext();

  const guestValues = mapToOption(cost.guests, guests);
  const productValues = mapToOption(Object.keys(cost.products), products);

  const guestOptions = mapToOption(Object.keys(guests), guests);
  const productsOptions = mapToOption(Object.keys(products), products);

  const onChangeGuests = (selectedOptions: OptionProps[]) => {
    const guestIdList = selectedOptions.map((option) => option.value);
    changeCost({ ...cost, guests: guestIdList });
  };

  const onChangeProducts = (selectedOptions: OptionProps[]) => {
    const productsUpdated = selectedOptions.map(({ value: productID }) => {
      if (Object.keys(cost.products).includes(productID)) {
        return [productID, cost.products[productID]];
      }
      return [productID, { id: productID, quantity: 1 }];
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
        allOptions
      />
      <SelectField
        label="Produtos"
        options={productsOptions}
        value={productValues}
        onChange={onChangeProducts}
        allOptions
      />
      <CostProductCount cost={cost} />
    </Stack>
  );
};
