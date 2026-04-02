import React from "react";
import styled, { css } from "styled-components";
import { DatePicker } from "antd";

const CustomDatePicker = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <DatePicker onChange={onChange} />
    </>
  );
};

export default CustomDatePicker;
