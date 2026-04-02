import "./reset.css";
import styled, { css } from "styled-components";
import { Form, Space, Radio, Input } from "antd";
import {
  CustomButton,
  AccordionGroup,
  CustomTab,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  FormField,
  CustomSpace,
  CustomFlex,
  SearchForm,
} from "./Components";
import {
  PlusOutlined,
  CaretDownOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "modern-normalize";

// radio
const options = [
  { label: "apple11", value: "apple11" },
  { label: "pear", value: "pear", disabled: true },
  { label: "orange", value: "orange" },
];

const GuideTitle = styled.h2`
  padding: 10px;
  background: #fff;
  color: #000;
  text-align: left;
`;

const searchItems = [
  { label: "검색영역", name: "title", type: "inputButton", span: 1 },
  { label: "데이트피커", name: "title", type: "datepicker", span: 1 },
  { label: "레인지피커", name: "title", type: "rangePicker", span: 1 },
  {
    label: "커스텀 조회기간",
    name: "dageRange",
    span: 1,
    render: (form) => (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Form.Item name="dateType" noStyle initialValue="all">
          <Radio.Group optionType="button" buttonStyle="solid">
            <Radio.Button value="all">전체</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="dateType" noStyle initialValue="all">
          <Input />
        </Form.Item>
      </div>
    ),
  },
];

function PubGuide() {
  return (
    <div style={{ textAlign: "center" }}>
      <CustomSpace
        direction={"vertical"}
        separator={"----------------------------------------"}
      >
        <SearchForm
          items={searchItems}
          onSearch={(values) => console.log("검색조건", "values")}
        />
        <CustomInput placeholder="Custom Input" />
        <Input placeholder="ant input" />
        <CustomFlex gap={"20px"}>
          <CustomRadio disabled>Radio 버튼</CustomRadio>
          <CustomRadio checked>Radio 버튼</CustomRadio>
        </CustomFlex>
        <CustomSpace direction={"vertical"} style={{ width: "100%" }}>
          <GuideTitle>Button</GuideTitle>
          <CustomSpace>
            <CustomButton size="small">small 버튼</CustomButton>
            <CustomButton>default 버튼</CustomButton>
            <CustomButton size="large">large 버튼</CustomButton>
          </CustomSpace>
          <CustomSpace>
            <CustomButton prefix={<PlusOutlined />}>
              왼쪽 아이콘 버튼
            </CustomButton>
            <CustomButton suffix={<PlusOutlined />}>
              오른쪽 아이콘 버튼
            </CustomButton>
          </CustomSpace>
          <CustomSpace>
            {/* 아이콘 only 버튼 */}
            <CustomButton>
              <CaretDownOutlined />
            </CustomButton>
            <CustomButton size="large">텍스트 버튼</CustomButton>
          </CustomSpace>
          <CustomSpace>
            <CustomButton size="large" disabled>
              disabled 텍스트 버튼
            </CustomButton>
          </CustomSpace>
          <CustomSpace>
            <CustomButton size="large" $variant="primary">
              primary 버튼
            </CustomButton>
            <CustomButton size="large" $variant="secondary">
              secondary 버튼
            </CustomButton>
          </CustomSpace>
          <CustomSpace>
            <CustomButton size="large" $variant="primary" $border="solid">
              primary $border 버튼
            </CustomButton>
            <CustomButton size="large" $variant="secondary" $border="solid">
              secondary $border 버튼
            </CustomButton>
          </CustomSpace>
        </CustomSpace>
        <FormField />
        <CustomSpace direction={"vertical"} style={{ width: "100%" }}>
          <GuideTitle>Radio</GuideTitle>
          <CustomRadioGroup
            options={options}
            defaultValue={"apple11"}
            optionType="button"
          />
          <CustomRadio disabled>Radio 버튼</CustomRadio>
          <CustomRadio checked>Radio 버튼</CustomRadio>
        </CustomSpace>
        <CustomSpace direction={"vertical"} style={{ width: "100%" }}>
          <GuideTitle>form</GuideTitle>
          <Form layout="vertical" style={{ maxWidth: 300, padding: 20 }}>
            <CustomInput
              label={"이름"}
              name={"userName1"} //name으로 label과 input의 id를 연결해줌
              prefix={
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              }
              rules={[
                { required: true, message: "Please input your username!" },
                { len: 11, message: "11자리 숫자를 정확히 입력해 주세요" },
                { pattern: /^[0-9]+$/, message: "숫자만 입력이 가능합니다." },
              ]}
            />
            <CustomInput
              suffix={"원"}
              allowClear={true}
              showCount
              label={"나이"}
              name={"name"}
            />
            <CustomInput
              allowClear={true}
              label={"이메일"}
              name={"userEmail"}
              rules={[
                { required: true, message: "Please input your userEmail!" },
                { type: "email", message: "이메일을 정확히 입력해 주세요" },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "형식에 맞지 않습니다.",
                },
              ]}
            />
          </Form>
        </CustomSpace>
        <CustomSpace direction={"vertical"} style={{ width: "100%" }}>
          <GuideTitle>tab</GuideTitle>
          <CustomTab></CustomTab>
        </CustomSpace>
        <CustomSpace direction={"vertical"} style={{ width: "100%" }}>
          <GuideTitle>Accordion</GuideTitle>
          <AccordionGroup></AccordionGroup>
        </CustomSpace>
      </CustomSpace>
    </div>
  );
}

export default PubGuide;
