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
  const { products, changeCost } = useAppContext();

  const onChangeQuantity = (quantity: number, productID: string) => {
    if (quantity === 0) {
      const updatedProducts = cost.products;
      delete updatedProducts[productID];
      changeCost({...cost, products: updatedProducts});
    }
    const newProduct = { productID, quantity };
    changeCost({...cost, products: {...cost.products, [productID]: newProduct}})
  }

  if (!cost) return <></>;

  return (
    <CostProductCountStyle>
      {Object.values(cost.products).map((product) => (
        <CostProductCountItem
          key={product.productID}
          name={products[product.productID].name ?? ""}
          quantity={product.quantity}
          onChangeQuantity={quantity => onChangeQuantity(quantity, product.productID)}
        />
      ))}
    </CostProductCountStyle>
  );
};
