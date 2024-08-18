import React from "react";
import { privateData } from "../../utils/analitics";
import { CardsWrapper, Container, PlusIconWrapper, TopCard } from "./style";

const Analitika = () => {
  return (
    <Container>
      <h1>Analitika</h1>
      <CardsWrapper>
        {privateData.map(({ id, title, icon, img, plusIcon, cound }) => {
          return (
            <TopCard key={id}>
              <div>{title}</div>
              <PlusIconWrapper>
                <img
                  src={plusIcon}
                  alt="plus icon not found"
                  className="plus-icon"
                />
              </PlusIconWrapper>
            </TopCard>
          );
        })}
      </CardsWrapper>
    </Container>
  );
};

export default Analitika;
