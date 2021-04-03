import Store from "./Store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222121",
    },
    secondary: {
      main: "#484848",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
  );
};

export default App;
