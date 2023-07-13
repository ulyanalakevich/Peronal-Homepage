import { ThemeProvider } from "styled-components";
import { Homepage } from "../../features/homepage";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { Portfolio } from "../../features/homepage/Portfolio";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
