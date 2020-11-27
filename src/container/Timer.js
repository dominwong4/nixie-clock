import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  NixieContainer,
  StyledNumber,
  StyledNumebrContainer,
} from "../style/Nixie";
import NixieDigit from "../components/NixieDigit";

const Timer = () => {
  const [dateTime, setDateTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime((dateTime) => dateTime.add(1, "second"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <NixieContainer>
        <NixieDigit digit={Math.floor(dateTime.hour() / 10)}></NixieDigit>
        <NixieDigit digit={dateTime.hour() % 10}></NixieDigit>
        <NixieDigit digit={":"}></NixieDigit>
        <NixieDigit digit={Math.floor(dateTime.minute() / 10)}></NixieDigit>
        <NixieDigit digit={dateTime.minute() % 10}></NixieDigit>
        <NixieDigit digit={":"}></NixieDigit>
        <NixieDigit digit={Math.floor(dateTime.second() / 10)}></NixieDigit>
        <NixieDigit digit={dateTime.second() % 10}></NixieDigit>
      </NixieContainer>
    </>
  );
};
export default Timer;
