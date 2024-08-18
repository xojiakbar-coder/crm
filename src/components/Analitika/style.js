import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsWrapper = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid red;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rebeccapurple;
`;

export const PlusIconWrapper = styled.div`
  .plus-icon {
    cursor: pointer;
    width: 35px;
    transition: all 200ms;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const BottomCard = styled.div`
  display: flex;
`;
