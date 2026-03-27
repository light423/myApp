import "./App.css";
import CustomButton from "./Components/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          className="primary"
          icon={<PlusOutlined />}
          iconPosition="left"
        >
          왼쪽 아이콘 버튼
        </CustomButton>
        <CustomButton
          className="primary"
          icon={<PlusOutlined />}
          iconPosition="right"
        >
          오른쪽 버튼
        </CustomButton>
      </header>
    </div>
  );
}

export default App;
