import "./App.css";
import "./reset.css";
import { Form } from "antd";
import {
  CustomButton,
  AccordionGroup,
  CustomTab,
  CustomInput,
  CustomRadio,
  CustomRadioGroup,
  FormField,
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormField />
        <CustomRadioGroup
          options={options}
          defaultValue={"apple11"}
          optionType="button"
        />
        <CustomRadio disabled>Radio 버튼</CustomRadio>
        <CustomRadio checked>Radio 버튼</CustomRadio>
        <Form layout="vertical" style={{ maxWidth: 300, padding: 20 }}>
          <CustomInput
            label={"이름"}
            name={"userName1"} //name으로 label과 input의 id를 연결해줌
            prefix={<InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
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
        <CustomTab></CustomTab>
        <AccordionGroup></AccordionGroup>
        <div>
          <CustomButton size="small">small 버튼</CustomButton>
          <CustomButton>default 버튼</CustomButton>
          <CustomButton size="large">large 버튼</CustomButton>
        </div>
        <div>
          <CustomButton prefix={<PlusOutlined />}>
            왼쪽 아이콘 버튼
          </CustomButton>
          <CustomButton suffix={<PlusOutlined />}>
            오른쪽 아이콘 버튼
          </CustomButton>
        </div>
        <div>
          <CustomButton>
            <CaretDownOutlined />
          </CustomButton>
          <CustomButton size="large">텍스트 버튼</CustomButton>
        </div>
        <div>
          <CustomButton size="large" disabled>
            disabled 텍스트 버튼
          </CustomButton>
        </div>
        <div>
          <CustomButton size="large" $variant="primary">
            primary 버튼
          </CustomButton>
          <CustomButton size="large" $variant="secondary">
            secondary 버튼
          </CustomButton>
        </div>
        <div>
          <CustomButton size="large" $variant="primary" $border="solid">
            primary $border 버튼
          </CustomButton>
          <CustomButton size="large" $variant="secondary" $border="solid">
            secondary $border 버튼
          </CustomButton>
        </div>
      </header>
    </div>
  );
}

export default App;
