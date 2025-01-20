import { CostType } from "../../../types";
import { useAppContext } from "../../../hooks/Context";
import { CostForm } from "../CostForm";
import styled from "styled-components";

type CostItemProps = {
  cost: CostType;
}

const CostItemStyle = styled.div`
  display: grid;
  grid-template-columns: auto 4rem;
  gap: 1rem;
  background-color: #CCCCCC;
  padding: 1rem;
  border-radius: .75rem;

  > button {
    padding: .5rem;
    border: none;
    background-color: #FF0000;
    color: #FFFFFF;
    border-radius: .5rem;
  }
`

export const CostItem = ({ cost }: CostItemProps) => {
  const { removeCost } = useAppContext();
  const onRemove = () => removeCost(cost.id);

  return (
    <CostItemStyle>
      <CostForm cost={cost} />
      <button onClick={onRemove}>DEL</button>
    </CostItemStyle>
  )
}