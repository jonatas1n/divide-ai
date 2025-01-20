import { useAppContext } from "../../../hooks/Context";
import styled from "styled-components";
import { MultiValue } from "react-select";
import { SelectField, OptionProps } from "../SelectField";
import { CostType } from "../../../types";
import { CostProductCount } from "../CostProductCount";

type CostFormProps = {
  cost: CostType;
};

const CostFormStyle = styled.div`
  display: grid;
  gap: 1rem;
`;

export const CostForm = ({ cost }: CostFormProps) => {
  const { guests, changeCost, products } = useAppContext();

  const guestInitialValues = Object.entries(cost.guests).map(
    ([guestID, guest]) => ({ value: guestID, label: guests[guest].name })
  );

  const guestOptions = Object.values(guests).map((guest) => ({
    value: guest.id,
    label: guest.name,
  }));

  const onChangeGuests = (selectedOptions: MultiValue<OptionProps>) => {
    const guestIdList = selectedOptions.map((option) => option.value);
    changeCost({ ...cost, guests: guestIdList });
  };

  const productInitialValues = Object.keys(cost.products).map((productID) => ({
    value: productID,
    label: products[productID].name,
  }));

  const productsOptions = Object.values(products).map(({id, name}) => ({
    value: id,
    label: name,
  }));

  const onChangeProducts = (selectedOptions: MultiValue<OptionProps>) => {
    const productsUpdated = selectedOptions.map(({ value }) => {
      if (Object.keys(cost.products).includes(value)) {
        return [value, cost.products[value]];
      }
      return [value, { productID: value, quantity: 1 }];
    });
    changeCost({ ...cost, products: Object.fromEntries(productsUpdated) });
  };

  return (
    <CostFormStyle>
      <SelectField
        label="Participantes"
        options={guestOptions}
        defaultValue={guestInitialValues}
        onChange={onChangeGuests}
      />
      <SelectField
        label="Produtos"
        options={productsOptions}
        defaultValue={productInitialValues}
        onChange={onChangeProducts}
      />
      <CostProductCount cost={cost} />
    </CostFormStyle>
  );
};
