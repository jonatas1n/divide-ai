import styled from "styled-components";
import { useAppContext } from "../../../hooks/Context";
import { CostType } from "../../../types";
import { CostProductCountItem } from "./CostProductCountItem";

type CostProductCountProps = {
  cost: CostType;
};

const CostProductCountStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const CostProductCount = ({ cost }: CostProductCountProps) => {
  const { products } = useAppContext();

  if (!cost) return <></>;

  return (
    <CostProductCountStyle>
      {Object.values(cost.products).map((product) => (
        <CostProductCountItem
          key={product.productID}
          name={products[product.productID].name ?? ""}
          quantity={product.quantity}
        />
      ))}
    </CostProductCountStyle>
  );
};
