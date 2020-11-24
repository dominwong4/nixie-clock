import styled from "styled-components";

export const NixieContainer = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const StyledNumebrContainer = styled.div`
  display: flex;
  width: 100px;
  height: 200px;
  justify-content: center;
  align-items: center;
`;
export const StyledNumber = styled.div.attrs({})`
  position: absolute;
  font-family: "TT Chocolates ExtraLight";
  font-size: 10rem;
  font-size: 15vw;
  color: #61616130;
  transform: scale(1, 1.3);
  z-index: -1;
  &.active {
    color: #ffb633;
    text-shadow: 0 0 20px #ff7500;
    z-index: 2;
  }
  &.active:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff7f12;
    z-index: 0;
    opacity: 0.2;
    filter: blur(30px);
  }
  &.active:after {
    content: ${(props) => props.number};
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 1;
    color: #ff005b;
    filter: blur(15px);
  }
`;
