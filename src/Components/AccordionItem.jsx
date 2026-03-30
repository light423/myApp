import React, { useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  border: 1px solid #aab9cf;
  border-radius: 8px;
  background: #fff;
`;
const AccordionTitle = styled.div`
  cursor: pointer;
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
  color: #000;
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 50%;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-image: url(../../images/ic_select_arrow8.svg);
    transform: translateY(-50%)
      rotate(${(props) => (props.$isOpen ? "180deg" : "0deg")});
    /* 컴포넌트 이름 앞에  $를 붙이면 스타일용 프롭스임을 명시하며 html 태그로 전달되지 않는다. */
    will-change: transform;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
const AccordionContent = styled.div`
  color: #000;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${(props) => (props.$isOpen ? "300px" : "0")};
`;
const InnerContent = styled.div`
  padding: 10px;
`;

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <AccordionWrapper>
      {/* 부모가 전달해준 isOpen과 onToggle을 사용한다 */}
      <AccordionTitle $isOpen={isOpen} onClick={onToggle}>
        <h2>{title}</h2>
      </AccordionTitle>
      <AccordionContent $isOpen={isOpen}>
        <InnerContent>{children}</InnerContent>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default AccordionItem;
