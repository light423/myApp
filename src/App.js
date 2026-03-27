import "./App.css";
import CustomButton from "./Components/CustomButton";
import AccordionItem from "./Components/AccordionItem";
import { PlusOutlined, CaretDownOutlined } from "@ant-design/icons";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton prefix={<PlusOutlined />} size="small" variant="primary">
          왼쪽 아이콘 버튼
        </CustomButton>
        <CustomButton prefix={<PlusOutlined />} size="large" variant="primary">
          왼쪽 아이콘 버튼
        </CustomButton>
        <CustomButton surfix={<PlusOutlined />}>
          오른쪽 아이콘 버튼
        </CustomButton>
        <CustomButton>
          <CaretDownOutlined />
        </CustomButton>
        <CustomButton size="large">텍스트 버튼</CustomButton>
        <CustomButton size="large" disabled>
          disabled 텍스트 버튼
        </CustomButton>
        <CustomButton size="large" variant="primary">
          텍스트 버튼
        </CustomButton>
        <CustomButton border="solid" variant="secondary">
          solid 텍스트 버튼
        </CustomButton>
        <AccordionItem />
      </header>
    </div>
  );
}

export default App;
