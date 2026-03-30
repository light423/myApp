import React, { useState } from "react";
import styled, { css } from "styled-components";

// style
const TabWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const TabMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    padding: 16px;
    cursor: pointer;
  }
`;
const TabContent = styled.div`
  padding: 16px;
  background-color: blue;
`;
function CustomTab() {
  const [activeTab, setActiveTab] = useState(0);

  // 탭 데이터 배열
  const tabData = [
    { title: "tab1", content: "1번째 내용입니다" },
    { title: "tab2", content: "2번째 내용입니다" },
    { title: "tab3", content: "3번째 내용입니다" },
  ];
  return (
    <TabWrapper>
      {/* tab heder */}
      <TabMenu>
        {tabData.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </TabMenu>
      {/* tab content */}
      <TabContent>{tabData[activeTab].content}</TabContent>
    </TabWrapper>
  );
}

export default CustomTab;
