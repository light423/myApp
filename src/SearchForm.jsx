import React from "react";
import { Form, Row, Col, Input, Button } from "antd";
import {
  CustomInput,
  CustomButton,
  CustomDatePicker,
  CustomRangePicker,
} from "./Components";

const SearchForm = ({ items = [], grid = 3, onSearch }) => {
  const [form] = Form.useForm();
  const baseSpan = 24 / grid; //한칸당 기본 span 계산

  const renderItem = (item) => {
    if (item.render) return item.render(form); //커스텀 레이아웃 우선

    const commonProps = {
      placeholder: item.placeholder || "입력하세요",
    };

    switch (item.type) {
      case "inputButton":
        return (
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Form.Item name={item.name} noStyle>
              <CustomInput {...commonProps} />
            </Form.Item>
            <CustomButton $variant="secondary">검색</CustomButton>
          </div>
        );
      case "datepicker":
        return (
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <CustomDatePicker {...commonProps} />
          </div>
        );
      case "rangePicker":
        return (
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <CustomRangePicker />
          </div>
        );
      default:
        return <Input {...commonProps} />;
    }
  };
  return (
    <Form
      form={form}
      onSearch={onSearch}
      labelCol={{ flex: "100px" }}
      labelAlign="left"
      colon={false}
      style={{ padding: "24px", background: "#fbfbfb", borderRadius: "8px" }}
    >
      <Row gutter={[16, 0]}>
        {items?.map((item, idx) => (
          <Col
            key={item.name || idx}
            span={Math.min((item.span || 1) * baseSpan, 24)}
          >
            <Form.Item
              name={item.name}
              label={item.label}
              {...item.formItemProps}
            >
              {renderItem(item)}
            </Form.Item>
          </Col>
        ))}
      </Row>
      <div>
        <Button>조회</Button>
      </div>
    </Form>
  );
};

export default SearchForm;
