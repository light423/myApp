import React, { useState } from "react";
import { AccordionItem } from "./";

function AccordionGroup() {
  // 현재 열려 있는 아코디언 번호
  const [activeIndex, setActiveIndex] = useState(null);
  const data = [
    { id: 0, title: "메뉴1", content: "내용 1입니다" },
    { id: 1, title: "메뉴2", content: "내용 2입니다" },
    { id: 2, title: "메뉴3", content: "내용 3입니다" },
  ];

  const handleToggle = (index) => {
    console.log(index);
    // 이미 열려 있는걸 다시 누르면 닫고, 아니면 해당 인텍스를 연다.
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default AccordionGroup;
