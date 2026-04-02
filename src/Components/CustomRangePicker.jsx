import React from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const CustomRangePicker = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <RangePicker onChange={onChange} />
    </>
  );
};

export default CustomRangePicker;
