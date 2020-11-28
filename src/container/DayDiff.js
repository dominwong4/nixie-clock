import React, { useState } from "react";
import dayjs from "dayjs";

const DayDiff = () => {
  const startDate = dayjs("12-24-2016", "MM-DD-YYYY");
  const today = dayjs();
  console.log(today.diff(startDate, "year", true));
  return <></>;
};

export default DayDiff;
