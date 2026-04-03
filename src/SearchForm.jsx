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

  const renderItem = (item) => {
    if (item.render) return item.render(form); //커스텀 레이아웃 우선

    const commonProps = {
      placeholder: item.placeholder || "입력하세요",
    };

    switch (item.type) {
      case "inputButton":
        return (
          <div
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Form.Item name={item.name} noStyle>
              <CustomInput {...commonProps} />
            </Form.Item>
            <CustomButton $variant="secondary">검색</CustomButton>
          </div>
        );
      case "datepicker":
        return (
          <div
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <Form.Item name={item.name} noStyle>
              <CustomDatePicker {...commonProps} />
            </Form.Item>
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
      layout="horizontal"
      form={form}
      onSearch={onSearch}
      labelCol={{ xs: { span: 24 }, sm: { flex: "100px" } }}
      wrapperCol={{ xs: { span: 24 }, sm: { flex: "auto" } }}
      labelAlign="left"
      colon={false}
      style={{ padding: "24px", background: "#fbfbfb", borderRadius: "8px" }}
    >
      <Row gutter={[48, 0]}>
        {items?.map((item, idx) => (
          <Col key={item.name || idx} span={6} xs={24} md={12} xl={6}>
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
