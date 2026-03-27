import "./App.css";
import CustomButton from "./Components/CustomButton";
import AccordionItem from "./Components/AccordionItem";
import { PlusOutlined, CaretDownOutlined } from "@ant-design/icons";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <AccordionItem />
      </header>
    </div>
  );
}

export default App;
