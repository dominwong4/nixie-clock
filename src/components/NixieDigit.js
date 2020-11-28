import React from "react";
import { StyledNumber, StyledNumebrContainer } from "../style/Nixie";

const NixieDigit = ({ digit }) => {
  const digitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ":"];
  return (
    <>
      <StyledNumebrContainer>
        {digitArray.map((digitItem) => (
          <StyledNumber
            key={digitItem}
            className={digit === digitItem ? "active" : ""}
            number={digitItem}
          >
            {digitItem}
          </StyledNumber>
        ))}
      </StyledNumebrContainer>
    </>
  );
};

export default NixieDigit;
