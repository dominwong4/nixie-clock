import React from "react";
import {
  NixieContainer,
  StyledNumber,
  StyledNumebrContainer,
} from "../style/Nixie";

const Timer = () => {
  return (
    <>
      <NixieContainer>
        <StyledNumebrContainer>
          <StyledNumber number="1">1</StyledNumber>
          <StyledNumber className="active" number="2">
            2
          </StyledNumber>
          <StyledNumber number="3">3</StyledNumber>
          <StyledNumber number="4">4</StyledNumber>
          <StyledNumber number="5">5</StyledNumber>
          <StyledNumber number="6">6</StyledNumber>
          <StyledNumber number="7">7</StyledNumber>
          <StyledNumber number="8">8</StyledNumber>
          <StyledNumber number="9">9</StyledNumber>
          <StyledNumber number="0">0</StyledNumber>
        </StyledNumebrContainer>
      </NixieContainer>
    </>
  );
};
export default Timer;
