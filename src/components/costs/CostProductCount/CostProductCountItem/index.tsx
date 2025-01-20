import styled from "styled-components";

type CostProductCountItemProps = {
  name: string;
  quantity: number;
};

const CostProductCountItemStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 0.5rem;
`;

const CostProductCountItemDisplay = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  grid-column: span 3;
  font-weight: bold;

  h3 {
    align-self: center;
  }
`;

export const CostProductCountItem = ({
  name,
  quantity,
}: CostProductCountItemProps) => {
  return (
    <CostProductCountItemStyle>
      <button>-</button>
      <CostProductCountItemDisplay>
        {name}
        <h3>{quantity}</h3>
      </CostProductCountItemDisplay>
      <button>+</button>
    </CostProductCountItemStyle>
  );
};
