import { ThemeProvider } from "styled-components";
import PubGuide from "./PubGuide";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <PubGuide />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
