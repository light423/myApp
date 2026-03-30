import "./App.css";
import "./reset.css";
import { CustomButton, AccordionGroup, CustomTab } from "./Components";
import { PlusOutlined, CaretDownOutlined } from "@ant-design/icons";
import "modern-normalize";
import { createGlobalStyle } from "styled-components";
function App() {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com');
  body, button, input, select, textarea {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  `;
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
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
          <CustomButton size="large" variant="primary">
            primary 버튼
          </CustomButton>
          <CustomButton size="large" variant="secondary">
            secondary 버튼
          </CustomButton>
        </div>
        <div>
          <CustomButton size="large" variant="primary" border="solid">
            primary border 버튼
          </CustomButton>
          <CustomButton size="large" variant="secondary" border="solid">
            secondary border 버튼
          </CustomButton>
        </div>
      </header>
    </div>
  );
}

export default App;
